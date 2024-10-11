import { Button, Form, Input } from "antd";

export const OrderCreateForm = ({ onSubmit }) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item label="订单名称" name="orderName" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="金额" name="amount" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="订单描述" name="orderDescription">
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
