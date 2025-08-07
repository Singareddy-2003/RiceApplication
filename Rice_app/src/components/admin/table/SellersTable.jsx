import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
// import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [loading, setLoading] = useState(false);

  const fetchUsers = async (page = 1, pageSize = 10) => {
    setLoading(true);
    const response = await fetch(
      `https://dummyjson.com/users?limit=${pageSize}&skip=${(page - 1) * pageSize}`
    );
    const data = await response.json();
    setUsers(data.users);
    setPagination({
      current: page,
      pageSize,
      total: data.total,
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleTableChange = (pagination) => {
    fetchUsers(pagination.current, pagination.pageSize);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 70,
    },
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (text, record) => `${record.firstName} ${record.lastName}`,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (gender) => (
        <Tag color={gender === "male" ? "blue" : "pink"}>{gender}</Tag>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "City",
      dataIndex: ["address", "city"],
      key: "city",
    },
  ];

  return (

<div className="container-fluid">
    <div className="row">
            <div className="container mt-5 col-12 col-sm-12 ">
      <h2 className="mb-4 fw-bold">User Data Table</h2>
      <Table
        columns={columns}
        dataSource={users}
        rowKey="id"
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
        bordered
        scroll={{ x: true }} // horizontal scroll on mobile
      />
    </div>
    </div>
</div>
  );
};

export default UserTable;
