import { FC, useState } from 'react';

import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import {
  StyledErrorMessage,
  StyledFormButton,
  StyledLogin,
  StyledSignInCard,
} from './styled';
import { routes } from '../../router/routes';

import { UserCredentials } from '../../types';

const Register: FC = (): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (credentials: UserCredentials): Promise<void> => {
    setErrorMessage('');

    try {
      setIsLoading(true);

      const data = JSON.stringify(credentials);

      // TODO: Create reusable api utility function / move ro redux
      const response = await fetch('http://localhost:3080/api/users/signup', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const respData = await response.json();

      if (Array.isArray(respData.errors)) {
        console.log(respData.errors);

        setErrorMessage(respData.errors[0].message);

        return;
      }
    } catch (error) {
      // TODO: Create reusable error handler utility function
    } finally {
      setIsLoading(false);
    }
  };

  const onFinish = (credentials: UserCredentials) => {
    handleSubmit(credentials);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledSignInCard title="Register">
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
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Please input valid email!',
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
          <StyledFormButton
            type="primary"
            htmlType="submit"
            loading={isLoading}
          >
            Submit
          </StyledFormButton>
        </Form.Item>

        {errorMessage && (
          <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
        )}

        <Link to={routes.HOME}>
          <StyledLogin type="text" block>
            Login
          </StyledLogin>
        </Link>
      </Form>
    </StyledSignInCard>
  );
};

export default Register;
