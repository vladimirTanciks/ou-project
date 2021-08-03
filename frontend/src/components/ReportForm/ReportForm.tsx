import { Form, Input, Radio, Space, Button } from 'antd';

export const ReportForm = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
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
      <div style={{ marginBottom: 10, fontSize: 20 }}>Type</div>
      <Radio.Group>
        <Space direction="vertical">
          <Radio value={1}>Glass</Radio>
          <Radio value={2}>Metal</Radio>
          <Radio value={3}>Construction</Radio>
          <Radio value={3}>Automotive</Radio>
        </Space>
      </Radio.Group>

      <div style={{ marginBottom: 10, marginTop: 30, fontSize: 20 }}>Size</div>
      <Radio.Group>
        <Space direction="vertical">
          <Radio value={1}>Fits in a bag</Radio>
          <Radio value={2}>Needs a car</Radio>
          <Radio value={3}>Needs a van</Radio>
        </Space>
      </Radio.Group>

      <div style={{ marginBottom: 10, marginTop: 30, fontSize: 20 }}>
        Location
      </div>
      <Form.Item style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
        <Input.Password
          style={{
            width: '60%',
          }}
        />
        <Button
          type="default"
          style={{
            width: '30%',
            marginLeft: 10,
          }}
        >
          Use device to get location
        </Button>
      </Form.Item>

      <div style={{ marginBottom: 10, marginTop: 30, fontSize: 20 }}>
        Details
      </div>

      <Input.TextArea rows={4} style={{ width: '92%' }} />

      <div style={{ marginBottom: 10, marginTop: 30, fontSize: 20 }}>
        Upload image
        <Button type="default" style={{ marginLeft: 20 }}>
          Upload
        </Button>
      </div>

      <Button type="primary" style={{ marginTop: 50, width: '92%' }}>
        Submit report
      </Button>
    </Form>
  );
};
