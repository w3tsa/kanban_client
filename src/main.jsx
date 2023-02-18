import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// components imports
import Login from "./components/Login.jsx";
import Task from "./components/Task.jsx";
import Comments from "./components/Comments.jsx";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/task",
    element: <Task />,
  },
  {
    path: "/comments",
    element: <Comments />,
  },
  {
    path: "/comments/:category/:id",
    element: <Comments />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
