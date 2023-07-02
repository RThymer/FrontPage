import { DatabaseOutlined, BugFilled } from "@ant-design/icons";
import Blogs from "../pages/articles/blogs";
import Production from "../pages/production";

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
    component: Production,
    icon: DatabaseOutlined,
  },
];
