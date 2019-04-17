import React from 'react';
import Logo from 'Assets/logo.png';
import styles from './index.scss';
import { Form, Input, Button } from 'antd';

export default function Login() {
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
        <Button className={'btn'} type={'primary'}>
          登录
        </Button>
      </Form>
    </div>
  );
}
