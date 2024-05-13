import React, { useContext } from "react";
import { Formik } from "formik";
import { Helmet } from "react-helmet-async";
import { v4 as uuidv4 } from "uuid";
import MainContext from "../../../context/context";
import axios from "axios";
const Add = () => {
  const {products,setProducts}=useContext(MainContext)
  console.log(products)
  return (
    
    <div>
     
      <Formik
        initialValues={{ image: "", title: "", price: "", decription: "" }}
        onSubmit={(values) => {
          axios
            .post("http://localhost:3000/products", {
              id: uuidv4(),
              title: values.title,
              price: values.price,
              image: values.image,
              decription: values.decription,
              category: values.category,
            })
            .then((res) => {
              setProducts([...products, res.data]);

              values.title = "";
              values.price = "";
              values.image = "";
              values.decription = "";
              values.category = "men";
              toast.success("item added");
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            className="container text-light p-5   gap-3 d-flex  flex-column  w-50  mt-5 rounded-3 mb-5 bg-dark "
            onSubmit={handleSubmit}
          >
            <label for="title" class="form-label">
              Product Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              class="form-control"
              id="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <label for="decription" class="form-label">
              Product Decription
            </label>
            <input
              type="text"
              name="decription"
              placeholder="Enter decription"
              class="form-control"
              id="decription"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.decription}
            />
            {errors.decription && touched.decription && errors.decription}
            {errors.title && touched.title && errors.title}
            <label for="image" class="form-label">
              Product Image
            </label>

            <input
              type="text"
              name="image"
              placeholder="Enter image url"
              class="form-control"
              id="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && errors.image}
            <label for="price" class="form-label">
              Product Price
            </label>

            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter price"
              class="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && errors.price}
            <label for="category" class="form-label">
              Product Category
            </label>
            <select
              type="number"
              name="category"
              id="category"
              
              class="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category}
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>

            {errors.category && touched.category && errors.category}
            <button className="btn btn-primary mt-3 " type="submit">
              ADD
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Add;
