import { Form, Input, Radio, Space, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setMapCoords } from '../../redux/features/map';
import { showNotification } from '../../redux/features/ui';
import { RootState } from '../../redux/store';
import { NotificatorInfo } from '../../types';

import { StyleRadioWrapper } from './styled';

export const ReportForm = () => {
  const { lat, lng } = useSelector((state: RootState) => state.map.coords);

  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const getDeviceLocation = () => {
    if (!navigator?.geolocation) return;

    const onSuccess = ({ coords }: GeolocationPosition) => {
      dispatch(setMapCoords({ lat: coords.latitude, lng: coords.longitude }));
    };

    const onFailure = ({ message }: GeolocationPositionError) => {
      const notification: NotificatorInfo = {
        type: 'error',
        message,
      };

      dispatch(showNotification(notification));
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
  };

  return (
    <Form
      layout="vertical"
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <StyleRadioWrapper>
        <Radio.Group style={{ marginRight: 100 }}>
          <div style={{ marginBottom: 10, fontSize: 20 }}>Type</div>

          <Space direction="vertical">
            <Radio value={1}>Glass</Radio>
            <Radio value={2}>Metal</Radio>
            <Radio value={3}>Construction</Radio>
            <Radio value={4}>Automotive</Radio>
          </Space>
        </Radio.Group>

        <Radio.Group>
          <div style={{ marginBottom: 10, fontSize: 20 }}>Size</div>
          <Space direction="vertical">
            <Radio value={1}>Fits in a bag</Radio>
            <Radio value={2}>Needs a car</Radio>
            <Radio value={3}>Needs a van</Radio>
          </Space>
        </Radio.Group>
      </StyleRadioWrapper>

      <div style={{ marginBottom: 10, marginTop: 30, fontSize: 20 }}>
        Location
      </div>

      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >
          <Input
            placeholder="Location"
            value={`${lat}, ${lng}`}
            style={{ background: '#f0f2f5', color: 'black' }}
            disabled
          />
        </Form.Item>
        <Form.Item
          name="month"
          rules={[{ required: true }]}
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
            margin: '0 8px',
          }}
        >
          <Button
            type="default"
            style={{
              marginLeft: 10,
              width: '100%',
            }}
            onClick={getDeviceLocation}
          >
            Use device to get location
          </Button>
        </Form.Item>
      </Form.Item>

      <div style={{ marginBottom: 10, marginTop: 30, fontSize: 20 }}>
        Details
      </div>

      <Input.TextArea rows={4} />

      <div style={{ marginBottom: 10, marginTop: 30, fontSize: 20 }}>
        Upload image
        <Button type="default">Upload</Button>
      </div>

      <Button type="primary" style={{ marginTop: 50 }}>
        Submit report
      </Button>
    </Form>
  );
};
