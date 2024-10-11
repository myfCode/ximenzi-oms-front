import { message } from "antd";
import axios from "axios";

const httpClient = axios.create({
  baseURL: "/api/",
});

httpClient.interceptors.request.use(function (config) {
  config.headers["Content-Type"] = "application/json";
  return config;
});

httpClient.interceptors.response.use(
  function (response) {
    if (response.status !== 200) {
      message.error("请求失败，状态码：" + response.status);
      return Promise.reject(response);
    }

    const returnData = response.data;
    if (!returnData.success) {
      message.error(returnData.message);
    }

    return returnData.data;
  },
  function (error) {
    message.error(error.message);
    return Promise.reject(error);
  }
);

export { httpClient };
