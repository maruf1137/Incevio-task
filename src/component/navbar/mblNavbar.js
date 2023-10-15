import React from "react";
import { Sidebar } from "flowbite-react";

const MblNavbar = ({ sidebar }) => {
  return (
    <div
      className={
        sidebar
          ? "mbl-navbar fixed top-0 left-0 min-h-screen bg-gray-50 shadow-md z-50 translate-x-0 transition-all duration-300 ease-linear lg:hidden"
          : "mbl-navbar fixed top-0 left-0 min-h-screen bg-gray-50 shadow-md z-50 -translate-x-full transition-all duration-300 ease-linear lg:hidden"
      }>
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items className="sidebar-list">
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">
              <p>Home</p>
            </Sidebar.Item>
            <Sidebar.Collapse label="Shop">
              <Sidebar.Item href="#">Products</Sidebar.Item>
              <Sidebar.Item href="#">Sales</Sidebar.Item>
              <Sidebar.Item href="#">Refunds</Sidebar.Item>
              <Sidebar.Item href="#">Shipping</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse label="Pages">
              <Sidebar.Item href="#">Products</Sidebar.Item>
              <Sidebar.Item href="#">Sales</Sidebar.Item>
              <Sidebar.Item href="#">Refunds</Sidebar.Item>
              <Sidebar.Item href="#">Shipping</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Collapse label="Cloths">
              <Sidebar.Item href="#">Products</Sidebar.Item>
              <Sidebar.Item href="#">Sales</Sidebar.Item>
              <Sidebar.Item href="#">Refunds</Sidebar.Item>
              <Sidebar.Item href="#">Shipping</Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default MblNavbar;
