import { Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import { TschoolFields } from "./types";

export const courseTableColumns: ColumnsType<TschoolFields> = [
  {
    title: "#",
    dataIndex: "index",
    key: "index",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "School",
    dataIndex: "schoolName",
    key: "school",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Program",
    dataIndex: "programName",
    key: "school",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Create By",
    dataIndex: "created_by",
    key: "created_by",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Create At",
    dataIndex: "created_at",
    key: "created_by",
    render: (text) => <a>{text}</a>,
  },
];
