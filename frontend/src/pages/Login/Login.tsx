import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from 'antd';

import { authenticate } from '../../redux/features/auth';

import { FormButton, SignInCard } from './styled';

const Login: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleSubmit = async () => {
    try {
      const data = JSON.stringify({
        email: 'vladimirs.tanciks@loadero.com',
        password: '123',
      });

      const response = await fetch('http://localhost:3080/api/users/signin', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const token = await response.json();

      dispatch(authenticate(true));

      console.log(token);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <SignInCard title="Log in">
      <Form
        layout="vertical"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <FormButton type="primary" htmlType="submit">
            Submit
          </FormButton>
        </Form.Item>
      </Form>
    </SignInCard>
  );
};

export default Login;
