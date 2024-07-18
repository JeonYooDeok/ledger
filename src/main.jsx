import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SingUp.jsx";
import Day from "./pages/Day.jsx";
import Calendar from "./pages/Calendar.jsx";
import CategorySetting from "./pages/CategorySetting.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Login /> },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/day",
        element: <Day />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/categorysetting",
        element: <CategorySetting />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
