import React from "react";
import "./Sidebar.scss";

export default function Sidebar() {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {collapsed ? ">" : "<"}
      </button>
      <div className="sidebar-header">{collapsed ? "" : "재고관리"}</div>
      <div className="sidebar-menu">
        <a href="#">입고</a>
      </div>
    </div>
  );
}
