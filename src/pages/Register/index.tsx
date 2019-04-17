import React from 'react';
import Logo from 'Assets/logo.png';
import styles from './index.scss';
import { Form, Input, Button } from 'antd';

export default function Register() {
  return (
    <div>
      <img src={Logo} alt="logo" height="128" width="128" className={styles.logo} />
      <Form className={'account-form'}>
        <Form.Item label={'邮箱'}>
          <Input />
        </Form.Item>
        <Form.Item label={'密码'}>
          <Input type={'password'} />
        </Form.Item>
        <Form.Item label={'确认密码'}>
          <Input type={'password'} />
        </Form.Item>
        <Button className={'btn'} type={'primary'}>
          注册
        </Button>
      </Form>
    </div>
  );
}
