import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";

function TeachersRootLayout() {
  return (
    <div className="main-admin-container">
      <Sidebar active="teachers" />
      <Outlet />
    </div>
  );
}

export default TeachersRootLayout;
