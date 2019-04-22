import React from 'react';
import { Row, Col, Table, Button, Icon } from 'antd';
import MenuAdder from './MenuAdder';

interface Props {
  history: { push: Function };
}

function MenuTable() {
  const columns = [
    {
      key: 'name',
      title: '品种',
      dataIndex: 'name',
    },
    {
      key: 'action',
      title: '删除',
      render: () => {
        return (
          <Button>
            <Icon type="close" />
          </Button>
        );
      },
    },
  ];
  const dataSource = [
    {
      key: '1',
      name: 'pizza',
    },
  ];
  return (
    <Table
      pagination={false}
      dataSource={dataSource}
      columns={columns}
      locale={{ emptyText: '菜单没有商品' }}
    />
  );
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

export default Admin;
