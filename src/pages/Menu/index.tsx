import React from 'react';
import { Table, Button, Icon } from 'antd';

interface Props {
  history: { push: Function };
}

export default function Menu(props: Props) {
  if (!sessionStorage.email || !sessionStorage.token) {
    props.history.push('/login');
  }

  const columns = [
    {
      key: 'size',
      title: '尺寸',
      dataIndex: 'size',
      render: (text: string) => {
        return <span>{text}</span>;
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
      title: '加入',
      dataIndex: 'action',
      render: (text: string, record: any) => {
        const plusButton = {
          children: (
            <Button>
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

  function dataTransfer(data: any) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        let item = data[key];
        dataSource.push({
          key: item.name,
          name: item.name,
        });
        item.options.forEach((options: any, index: number) => {
          dataSource.push({
            ...options,
            key: item.name + index,
          });
        });
      }
    }
  }

  dataTransfer(data);

  console.log(dataSource);

  // console.log({
  //   '-LcB9ZXW8ZEkgrea': {
  //     description: '好吃不贵',
  //     name: '杭州西湖醋鱼',
  //     options: [{ price: '138', size: '7' }, { price: '118', size: '5' }],
  //   },
  //   '-LcB9zLq4JuHpA5v': {
  //     description: '特别好吃',
  //     name: '狮子头',
  //     options: [{ price: '8', size: '3' }, { price: '6', size: '2' }],
  //   },
  // });

  return (
    <div>
      <Table pagination={false} dataSource={dataSource} columns={columns} />
    </div>
  );
}
