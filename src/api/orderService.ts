import { httpClient } from "@/http";
import * as qs from "qs";

// TODO: delete
export const httpRunningTest = async () => {
  return httpClient.get("/order/runningTest");
};

// TODO: delete
export const httpErrorTest = async () => {
  return httpClient.get("/order/errorTest");
};

export interface OrderPO {
  id?: number;

  orderId?: string; // (订单ID)
  orderName?: string; // (订单名称)
  amount?: number; //(金额)
  orderDate?: number; //（订单日期）
  orderDescription?: string; //s (订单描述)
}

export interface IOrderFilter
  extends Omit<OrderPO, "id" | "amount" | "orderDate"> {
  amountMin?: number;
  amountMax?: number;
  orderDateStart?: number;
  orderDateEnd?: number;
}

export const getOrderList = async (
  orderFilter: IOrderFilter = {}
): Promise<OrderPO[]> => {
  const filterQuery = qs.stringify(orderFilter);
  return httpClient.get(`/order/list?${filterQuery}`);
};

export const updateOrder = async (
  orderId: string,
  order: OrderPO
): Promise<boolean> => {
  return httpClient.put(`/order/update/${orderId}`, order);
};

export const deleteOrder = async (orderId: string): Promise<boolean> => {
  return httpClient.delete(`/order/delete/${orderId}`);
};

export const createOrder = async (
  order: Required<Pick<OrderPO, "orderName" | "amount">> & {
    orderDescription?: string;
  }
): Promise<boolean> => {
  return httpClient.post("/order/create", order);
};
