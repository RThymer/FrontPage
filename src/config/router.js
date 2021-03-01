import { AccountBookOutlined, DatabaseOutlined } from "@ant-design/icons";

export default [
  {
    path: "/about",
    name: "about",
    component: () => <div>about</div>,
    icon: AccountBookOutlined,
  },
  {
    path: "/product",
    name: "product",
    component: () => <div>product</div>,
    icon: DatabaseOutlined,
  },
];
