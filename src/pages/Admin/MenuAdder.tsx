import React from 'react';
import { Form, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

interface UserFormProps extends FormComponentProps {}

function MenuAdder(props: UserFormProps) {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 22 },
    },
    colon: false,
  };

  return (
    <div>
      <Form>
        <Form.Item {...formItemLayout} label={'品种'}>
          {props.form.getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入品种',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label={'描述'}>
          {props.form.getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入描述',
              },
            ],
          })(<Input.TextArea/>)}
        </Form.Item>
        <h1>选项一：</h1>
        <Form.Item {...formItemLayout} label={'尺寸一'}>
          {props.form.getFieldDecorator('size1', {
            rules: [
              {
                required: true,
                message: '请输入尺寸一',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label={'价格一'}>
          {props.form.getFieldDecorator('price1', {
            rules: [
              {
                required: true,
                message: '请输入价格一',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <h1>选项二：</h1>
        <Form.Item {...formItemLayout} label={'尺寸二'}>
          {props.form.getFieldDecorator('size2', {
            rules: [
              {
                required: true,
                message: '请输入尺寸二',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label={'价格二'}>
          {props.form.getFieldDecorator('price2', {
            rules: [
              {
                required: true,
                message: '请输入价格二',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item>
        <Button type={'primary'}>提交</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Form.create<UserFormProps>()(MenuAdder);
