import * as React from "react";
import "./App.css";
import { Outlet, useLocation } from "react-router";
import TheHeader from "./components/TheHeader";
import SideNav from "./components/SideNav";
import Modal from "./components/Modal";

function App() {
  const location = useLocation();
  const hidePaths = ["/", "/signup", "/signupcomplete"];
  const hide = hidePaths.includes(location.pathname);
  return (
    <>
      <Modal />
      {!hide && <TheHeader />}
      <div className="flex justify-center bg-bg00">
        {!hide && <SideNav />}
        <Outlet />
      </div>
    </>
  );
}

export default App;
