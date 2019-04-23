import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Button, Icon, message } from 'antd';
import MenuAdder from './MenuAdder';
import LC from 'leancloud-storage';

interface Props {
  history: { push: Function };
}

function Admin(props: Props) {
  if (!sessionStorage.email || !sessionStorage.token) {
    props.history.push('/login');
  }

  return (
    <div>
      <Row>
        <Col sm={24} md={16}>
          <MenuAdder />
        </Col>
        <Col sm={24} md={8}>
          <h3>菜单</h3>
          <MenuTable />
        </Col>
      </Row>
    </div>
  );
}

function MenuTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const query = new LC.Query('Food');
    let dataSource: any = [];
    query.find().then((e: any) => {
      console.log(e);
      e.forEach((obj: any) => {
        dataSource.push({ key: obj.id, name: obj.attributes.name });
      });
      setData(dataSource);
    });
  }, []);
  const columns = [
    {
      key: 'name',
      title: '品种',
      dataIndex: 'name',
    },
    {
      key: 'action',
      title: '删除',
      render: (text: any, record: any) => {
        return (
          <Button onClick={() => handleDeleteFood(record)}>
            <Icon type="close" />
          </Button>
        );
      },
    },
  ];
  function handleDeleteFood(record: any) {
    var food = LC.Object.createWithoutData('Food', record.key);
    food.destroy().then(
      function() {
        message.success('删除成功');
        let newData = JSON.parse(JSON.stringify(data));
        let index = newData.findIndex((obj: any) => {
          return obj.key === record.key;
        });
        newData.splice(index, 1);
        setData(newData);
      },
      function() {
        message.error('删除失败');
      },
    );
  }
  return (
    <Table
      pagination={false}
      dataSource={data}
      columns={columns}
      locale={{ emptyText: '菜单没有商品' }}
    />
  );
}

export default Admin;
