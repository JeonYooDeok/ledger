import * as React from "react";
import "./App.css";
import { Outlet, useLocation } from "react-router";
import TheHeader from "./components/TheHeader";
import SideNav from "./components/SideNav";

function App() {
  const location = useLocation();
  const hidePaths = ["/", "/signup"];
  const hide = hidePaths.includes(location.pathname);
  return (
    <>
      {!hide && <TheHeader />}
      <div className="flex justify-center bg-bg00">
        {!hide && <SideNav />}
        <Outlet />
      </div>
    </>
  );
}

export default App;
