import React, { useState } from 'react';
import Logo from 'Assets/logo.png';
import styles from './index.scss';
import { Form, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { email_regexp, password_regexp } from '@/utilities/Regexp';

interface Props {
  form: { getFieldDecorator: Function; getFieldValue: Function };
}

// interface UserFormProps extends FormComponentProps {
//   age: number;
//   name: string;
// }

function Register(props: Props) {
  // const [email, setEmail] = useState('abc@abc.com');
  const formValidator = (rule: any, value: string, callback: Function): void => {
    if (value && rule.pattern && !value.match(rule.pattern)) {
      callback(rule.message);
    } else {
      callback();
    }
  };

  const passwordValidator1 = (rule: any, value: string, callback: Function): void => {
    if (value && !value.match(rule.pattern)) {
      callback(rule.message);
    } else {
      callback();
    }
  };

  const confirmPasswordValidator = (rule: any, value: string, callback: Function): void => {
    if (value !== props.form.getFieldValue('firstPassword')) {
      callback(rule.message);
    } else {
      callback();
    }
  };

  return (
    <div>
      <img src={Logo} alt="logo" height="128" width="128" className={styles.logo} />
      <Form className={'account-form'}>
        <Form.Item label={'邮箱'}>
          {props.form.getFieldDecorator('email', {
            rules: [
              { required: true, message: '邮箱不能为空' },
              // { type: 'email', message: '请输入正确的邮箱地址，如：qq@qq.com' },
              {
                pattern: email_regexp,
                validator: formValidator,
                message: '请输入正确的邮箱地址',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label={'密码'}>
          {props.form.getFieldDecorator('firstPassword', {
            rules: [
              {
                required: true,
                message: '密码不能为空，请输入密码！',
              },
              {
                pattern: password_regexp,
                validator: passwordValidator1,
                message: '请输入正确的密码格式：6-16位字母、数字或特殊字符 _-.',
              },
            ],
          })(
            <Input
              type={'password'}
              maxLength={16}
              placeholder="请输入6-16位字母、数字或特殊字符的密码"
            />,
          )}
        </Form.Item>
        <Form.Item label={'确认密码'}>
          {props.form.getFieldDecorator('confirmPassword', {
            rules: [
              {
                required: true,
                message: '密码不能为空，请输入密码！',
              },
              {
                validator: confirmPasswordValidator,
                message: '两次输入的密码不一致！',
              },
            ],
          })(<Input type={'password'} maxLength={16} placeholder="请输入确认密码" />)}
        </Form.Item>
        <Button className={'btn'} type={'primary'}>
          注册
        </Button>
      </Form>
    </div>
  );
}

export default Form.create()(Register);
