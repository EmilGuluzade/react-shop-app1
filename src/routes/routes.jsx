import Add from "../pages/admin/Add/Add";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Basket from "../pages/site/Basket/Basket";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";
import AdminRoot from "../pages/admin/AdminRoot";
import Error from "../pages/Error/Error";
import Detail from "../pages/site/Detail/Detail";

const ROUTES = [
  {
    path: "/",
    element: <SiteRoot></SiteRoot>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "cart",
        element: <Basket></Basket>,
      },
      {
        path: "detail/:id",
        element: <Detail></Detail>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "add",
        element: <Add></Add>,
      },
      {
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
];

export default ROUTES;
