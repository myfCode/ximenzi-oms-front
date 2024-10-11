import { Menu } from "antd";
import { BorderOuterOutlined, UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export const AppMenu = () => {
  const history = useHistory();
  const handleClick = (e) => {
    const path = e.item.props.path;
    if (path) {
      history.push(path);
    }
  };
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      onClick={handleClick}
      items={[
        {
          key: "1",
          icon: <BorderOuterOutlined />,
          label: "订单",
          children: [
            {
              key: "11",
              icon: <BorderOuterOutlined />,
              label: "订单列表",
              path: "/order/list",
            },
            {
              key: "12",
              icon: <BorderOuterOutlined />,
              label: "新建订单",
              path: "/order/create",
            },
          ],
        },
        {
          key: "2",
          icon: <UserOutlined />,
          label: "用户",
          children: [
            {
              key: "21",
              icon: <UserOutlined />,
              label: "设置",
              path: "/user/settings",
            },
          ],
        },
      ]}
    />
  );
};
