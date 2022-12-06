import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Products from "./Components/ProductFolder/Products";
import AboutUs from "./Components/AboutUsFolder/AboutUs";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import MainPage from "./Components/MainPageFolder/MainPage";
import Shopping from "./Components/Shopping/Shopping";
import Login from "./Components/LoginFolder/Login";
import Register from "./Components/Register/Register";
import ShipAddress from "./Components/ShipAddress/ShipAddress";
import ErrorPage from "./Components/Error/error-page";
<<<<<<< HEAD
import {Provider} from 'react-redux';
import stores  from './stores'
import "bootstrap/dist/css/bootstrap.css";
=======
import Payment from "./Components/Payment/Payment"
>>>>>>> 22768b23bf8af372d808a7e5d4d3eb300a9be981
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "MainPage",
        element: <MainPage />,
      },
      {
        path: "Products",
        element: <Products />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
      {
        path: "ShoppingCart",
        element: <Shopping />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Register",
        element: <Register />,
      },
      {
        path: "ShipAddress",
        element: <ShipAddress />,
      },
      {
        path:"Payment",
        element:<Payment/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={stores}>
  <React.StrictMode>
    
      <RouterProvider router={router} />
    
    
  </React.StrictMode>
  </Provider>
);
