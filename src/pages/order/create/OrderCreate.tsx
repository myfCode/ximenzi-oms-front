import React from "react";
import OrderCreateForm from "../components/orderCreateForm";
import { createOrder, OrderPO } from "@/api/orderService";
import { message } from "antd";

type Props = {};

export const OrderCreate = (props: Props) => {
  const onSubmit = (values: OrderPO) => {
    createOrder(values).then(() => {
      message.success(`success`);
    });
  };
  return <OrderCreateForm onSubmit={onSubmit} />;
};
