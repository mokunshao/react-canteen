import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import LC from 'leancloud-storage';
import { connect } from 'dva';
import { withRouter } from 'dva/router';

interface UserFormProps extends FormComponentProps {
  history: { push: Function };
}

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
  function handleSubmit() {
    props.form.validateFields((err, value) => {
      if (!err) {
        const { name, description, size1, price1, size2, price2 } = value;
        const Food = LC.Object.extend('Food');
        const food = new Food();
        food.set('name', name);
        food.set('description', description);
        food.set('description', description);
        food.set('size1', size1);
        food.set('price1', price1);
        food.set('size2', size2);
        food.set('price2', price2);
        food.save().then(
          () => {
            message.success('添加成功');
            props.history.push('/menu');
          },
          () => {
            message.error('添加失败');
          },
        );
      }
    });
  }
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
          {props.form.getFieldDecorator('description', {
            rules: [
              {
                required: true,
                message: '请输入描述',
              },
            ],
          })(<Input.TextArea />)}
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
          <Button type={'primary'} onClick={handleSubmit}>
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default withRouter(connect()(Form.create()(MenuAdder)));
