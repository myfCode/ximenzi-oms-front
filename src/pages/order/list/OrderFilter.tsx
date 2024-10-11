import { IOrderFilter } from "@/api/orderService";
import { Button, Col, DatePicker, Form, Input, InputNumber, Row } from "antd";
import React from "react";

const { RangePicker } = DatePicker;

export interface IProps {
  getOrderListCallback: (params?: IOrderFilter) => void;
}

export const OrderFilter = ({ getOrderListCallback }: IProps) => {
  const onFinish = (values) => {
    console.log("onFinish : ", values);
    if (values.orderDate) {
      const start = values.orderDate[0];
      const end = values.orderDate[1];
      values.orderDate = undefined;
      values.orderDateStart = start.valueOf();
      values.orderDateEnd = end.valueOf();
    }
    getOrderListCallback(values);
  };
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      style={{
        boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1)`,
        padding: 8,
        marginBottom: 16,
      }}
    >
      <Row>
        <Col style={{ width: 400 }}>
          <Form.Item label="订单名称" name="orderName">
            <Input />
          </Form.Item>
        </Col>
        <Col flex={1}>
          <Form.Item label="订单描述" name="orderDescription">
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col style={{ width: 400 }}>
          <Form.Item label="订单金额">
            <Row>
              <Col>
                <Form.Item name="amountMin">
                  <InputNumber placeholder="min" />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item name="amountMax">
                  <InputNumber placeholder="max" />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>
        </Col>
        <Col flex={1}>
          <Form.Item
            label="订单日期"
            style={{ marginBottom: 0 }}
            name="orderDate"
          >
            <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"end"}>
        <Button htmlType="submit" type="primary" style={{ marginTop: "-16px" }}>
          搜索
        </Button>
      </Row>
    </Form>
  );
};
