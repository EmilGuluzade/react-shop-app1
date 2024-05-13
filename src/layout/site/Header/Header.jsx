import React, { useEffect, useState } from "react";
import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {
  const [basket,setBasket]=useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("basket")):[])
  

  


  return (
    <header className="position-sticky top-0 default-header">
      <div className="menutop-wrap">
        <div className="menu-top container">
          <div className="d-flex justify-content-between align-items-center">
            <ul className="list">
              <li>
                <a href="tel:+12312-3-1209">+12312-3-1209</a>
              </li>
              <li>
                <a href="mailto:support@colorlib.com">support@colorlib.com</a>
              </li>
            </ul>
            <ul className="list">
              <li>
                <a href="#">login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar    navbar-expand-lg  navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="	https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end align-items-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#catagory">Category</a>
              </li>
              <li>
                <a href="#men">Men</a>
              </li>
              <li>
                <a href="#women">Women</a>
              </li>
              <li>
                <a href="#latest">latest</a>
              </li>

              <li className="dropdown">
                <a
                  className="dropdown-toggle"
                  href="#"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" href="category.html">
                    Category
                  </Link>
                  <Link className="dropdown-item" href="single.html">
                    Single
                  </Link>
                  <Link className="dropdown-item" href="cart.html">
                    Cart
                  </Link>
                  <Link className="dropdown-item" href="checkout.html">
                    Checkout
                  </Link>
                  <Link className="dropdown-item" href="confermation.html">
                    Confermation
                  </Link>
                  <Link className="dropdown-item" href="login.html">
                    Login
                  </Link>
                  <Link className="dropdown-item" href="tracking.html">
                    Tracking
                  </Link>
                  <Link className="dropdown-item" href="generic.html">
                    Generic
                  </Link>
                  <a className="dropdown-item" href="elements.html">
                    Elements
                  </a>
                </div>
              </li>
              <li>
                <Link to="cart">Cart <span>0</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
