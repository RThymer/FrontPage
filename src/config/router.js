import { DatabaseOutlined, BugFilled } from "@ant-design/icons";
import Blogs from "../pages/articles/blogs";

export default [
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    icon: BugFilled,
  },
  {
    path: "/product",
    name: "product",
    component: () => <div>product</div>,
    icon: DatabaseOutlined,
  },
];
