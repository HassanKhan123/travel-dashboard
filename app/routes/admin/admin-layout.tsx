import React from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      Admin Layout
      <Outlet />
    </div>
  );
};

export default AdminLayout;
