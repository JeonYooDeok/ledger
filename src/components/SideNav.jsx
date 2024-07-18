import React from "react";
import { Link, useLocation } from "react-router-dom";

function SideNav() {
  const location = useLocation();
  const menuActive = (path) => {
    return location.pathname === path
      ? "pl-4 pr-2 py-2 bg-white text-grey00"
      : "pl-4 pr-2 py-2 hover:bg-white hover:text-grey00";
  };
  return (
    <div className="flex flex-col w-40 min-h-screen h-100vh py-4 text-white bg-sideNavBg">
      <Link to="/day" className={menuActive("/day")}>
        일별
      </Link>
      <Link to="/calendar" className={menuActive("/calendar")}>
        달력
      </Link>
      <Link to="/categorysetting" className={menuActive("/categorysetting")}>
        카테고리 관리
      </Link>
    </div>
  );
}

export default SideNav;
