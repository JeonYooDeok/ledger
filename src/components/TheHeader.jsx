import React from "react";
import { useNavigate } from "react-router-dom";
import MonotoneButton from "./buttons/MonotoneButton";

function TheHeader() {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between px-6 py-4 bg-headerBg">
      <span className="text-white">로고</span>
      <div className="flex gap-2 items-center">
        <span className="text-white">User_ID</span>
        <MonotoneButton label="로그아웃" onClick={logOut} />
      </div>
    </div>
  );
}

export default TheHeader;
