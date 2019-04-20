import React, { useState } from 'react';
import { Table, Button, Icon, Row, Col } from 'antd';

interface Props {
  history: { push: Function };
}

export default function Menu(props: Props) {
  const [cart, setCart] = useState([]);
  if (!sessionStorage.email || !sessionStorage.token) {
    props.history.push('/login');
  }
  function handleAddToCart(record: any): any {
    let newData: any
    const index = cart.findIndex((item: any) => record.key === item.key);
    if(index===-1){
      newData = [...cart, record];
    }else{
      newData = [...cart]
    }
    setCart(newData);
  }
  const columns = [
    {
      key: 'size',
      title: '尺寸',
      dataIndex: 'size',
      render: (text: string,record:any) => {
        if(record.price){
          return <span>{text}</span>;
        }else{
          return {
            children:<strong>{text}</strong>,
            props:{
              colSpan:2
            }
          }
        }
      },
    },
    {
      key: 'price',
      title: '价格',
      dataIndex: 'price',
      render: (text: string) => {
        return <span>{text}</span>;
      },
    },
    {
      key: 'action',
      title: '添加',
      dataIndex: 'action',
      render: (text: string, record: any) => {
        const plusButton = {
          children: (
            <Button onClick={() => handleAddToCart(record)}>
              <Icon type={'plus'} />
            </Button>
          ),
          props: { colSpan: 1 },
        };
        if (!record.price) {
          plusButton.props.colSpan = 0;
        }
        return plusButton;
      },
    },
  ];

  let data = {
    1: {
      name: '榴莲披萨',
      description: '最好吃的披萨',
      options: [
        {
          size: 9,
          price: 38,
        },
        {
          size: 12,
          price: 48,
        },
      ],
    },
    2: {
      name: '意大利披萨',
      description: '最好吃的披萨',
      options: [
        {
          size: 9,
          price: 38,
        },
        {
          size: 12,
          price: 48,
        },
      ],
    },
    3: {
      name: '水果披萨',
      description: '最好吃的披萨',
      options: [
        {
          size: 9,
          price: 38,
        },
        {
          size: 12,
          price: 48,
        },
      ],
    },
  };

  let dataSource: any[] = [];

  (function(data: any) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        let item = data[key];
        dataSource.push({
          key: item.name,
          size: item.name,
        });
        item.options.forEach((options: any, index: number) => {
          dataSource.push({
            ...options,
            name: item.name,
            key: item.name + index,
          });
        });
      }
    }
  })(data);

  // console.log(dataSource);

  function renderCartTable() {
    function handleDecrease(record:any){

    }
    function handleIncrease(record:any){

    }
    const columns: any[] = [
      {
        key: 'count',
        title: '数量',
        dataIndex: 'count',
        render: (text:string, record:any) => (
          <span>
            <Button
              onClick={() => handleDecrease(record)}
            >
              -
            </Button>
            <span>{record.count}</span>
            <Button
              onClick={() => handleIncrease(record)}
            >
              +
            </Button>
          </span>
        )
      },
      {
        key: 'name',
        title: '菜单',
        dataIndex: 'name',
      },
      {
        key: 'price',
        title: '价格',
        dataIndex: 'price',
      },
    ];

    return <Table pagination={false} dataSource={cart} columns={columns} />;
  }

  return (
    <div>
      <Row>
        <Col md={16} xs={24}>
          <Table pagination={false} dataSource={dataSource} columns={columns} />
        </Col>
        <Col md={8} xs={24}>
          {renderCartTable()}
          <p>总价: totalPrice</p>
          <Button type="primary">提交</Button>
        </Col>
      </Row>
    </div>
  );
}
