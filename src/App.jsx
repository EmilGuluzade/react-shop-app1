import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ROUTES from "./routes/routes";
import MainContext from "./context/context";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const router = createBrowserRouter(ROUTES);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts([...res.data]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);



  const contextData = {
    loading,
    setLoading,
    error,
    setError,
    products,
    setProducts,
  };
  return (
    <React.Fragment>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={router}></RouterProvider>
      </MainContext.Provider>
    </React.Fragment>
  );
}

export default App;
