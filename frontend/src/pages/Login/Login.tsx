import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from 'antd';
import { Link, useHistory } from 'react-router-dom';

import { AuthState, loginUser } from '../../redux/features/auth';

import { RootState, useAppDispatch } from '../../redux/store';

import {
  StyledErrorMessage,
  StyledFormButton,
  StyledSignInCard,
  StyledRegister,
} from './styled';
import { routes } from '../../router/routes';

import { UserCredentials } from '../../types';

const Login: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const { isLoading, error }: AuthState = useSelector(
    ({ auth }: RootState) => auth,
  );

  const handleSubmit = async (credentials: UserCredentials): Promise<void> => {
    const { payload } = await dispatch(loginUser(credentials));

    if (payload?.token) {
      history.push(routes.MAP);
    }
  };

  const onFinish = (credentials: UserCredentials) => {
    handleSubmit(credentials);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledSignInCard title="Log in">
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

        {error && <StyledErrorMessage>{error}</StyledErrorMessage>}

        <Link to={routes.REGISTER}>
          <StyledRegister type="text" block>
            Register
          </StyledRegister>
        </Link>
      </Form>
    </StyledSignInCard>
  );
};

export default Login;
