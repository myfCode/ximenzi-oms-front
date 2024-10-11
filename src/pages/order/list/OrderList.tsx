import React, { useCallback, useEffect, useState } from "react";
import { Button, Form, Input, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  deleteOrder,
  getOrderList,
  IOrderFilter,
  OrderPO,
  updateOrder,
} from "@/api/orderService";
import moment from "moment";
import { OrderFilter } from "./OrderFilter";

export const OrderList = (props: Props) => {
  const [data, setData] = useState<OrderPO[]>([]);
  const [editId, setEditId] = useState("");
  const [form] = Form.useForm();

  const getOrderListCallback = useCallback((params?: IOrderFilter) => {
    getOrderList(params).then((res) => {
      setData(res);
      setEditId("");
    });
  }, []);

  const onFinish = (values: Partial<OrderPO>) => {
    updateOrder(editId, values).then(() => getOrderListCallback());
  };

  useEffect(() => {
    getOrderListCallback();
  }, [getOrderListCallback]);

  const handleEdit = (order: OrderPO) => (e) => {
    e.stopPropagation();
    e.preventDefault();
    setEditId(order.orderId!);
    form.setFieldsValue({
      orderName: order.orderName,
      amount: order.amount,
      orderDescription: order.orderDescription,
    });
  };

  const handleDelete = (orderId: string) => () => {
    deleteOrder(orderId).then(() => getOrderListCallback());
  };

  const handleCancel = () => {
    setEditId("");
  };

  const columns: ColumnsType<OrderPO> = [
    {
      title: "订单名称",
      dataIndex: "orderName",
      key: "orderName",
      render: (text, record) => {
        if (record.orderId === editId) {
          return (
            <Form.Item noStyle name="orderName">
              <Input value={text} />
            </Form.Item>
          );
        }
        return <a>{text}</a>;
      },
    },
    {
      title: "金额",
      dataIndex: "amount",
      key: "amount",
      render: (text, record) => {
        if (record.orderId === editId) {
          return (
            <Form.Item noStyle name="amount">
              <Input value={text} />
            </Form.Item>
          );
        }
        return <span>{text}</span>;
      },
    },
    {
      title: "订单日期",
      dataIndex: "orderDate",
      key: "orderDate",
      render: (text, record) => {
        return moment(text).format("YYYY-MM-DD HH:mm:ss");
      },
    },
    {
      title: "订单描述",
      key: "orderDescription",
      dataIndex: "orderDescription",
      render: (text, record) => {
        if (record.orderId === editId) {
          return (
            <Form.Item noStyle name="orderDescription">
              <Input.TextArea value={text} />
            </Form.Item>
          );
        }
        return <span>{text}</span>;
      },
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => {
        if (editId && editId === record.orderId) {
          return (
            <Space size="middle">
              <Button type="primary" htmlType="submit">
                保存
              </Button>
              <Button onClick={handleCancel}>取消</Button>
            </Space>
          );
        }

        const disabled = !!editId;
        return (
          <Space size="middle">
            <Button
              disabled={disabled}
              type="primary"
              onClick={handleEdit(record)}
              htmlType="button"
            >
              修改
            </Button>
            <Button disabled={disabled} onClick={handleDelete(record.orderId!)}>
              删除
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <OrderFilter getOrderListCallback={getOrderListCallback} />
      <Form onFinish={onFinish} form={form}>
        <Table
          columns={columns}
          dataSource={data}
          rowKey={(record) => record.id || record.orderId}
        />
      </Form>
    </>
  );
};
