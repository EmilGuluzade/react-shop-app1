import React from "react";
import "./Category.css";
const Category = () => {
  return (
    <section class="category-area section-gap section-gap" id="catagory">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="menu-content pb-40">
            <div class="title text-center">
              <h1 class="mb-10">Shop for Different Categories</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 col-md-8 mb-10  ">
            <div class="row category-bottom">
              <div class="col-lg-6 col-md-6 mb-30">
                <div class="content">
                  <a href="#" target="_blank">
                    <div class="content-overlay"></div>
                    <img
                      class="content-image img-fluid d-block mx-auto"
                      src="https://preview.colorlib.com/theme/shop/img/c1.jpg"
                      alt=""
                    />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Product for Women</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 mb-30">
                <div class="content">
                  <a href="#" target="_blank">
                    <div class="content-overlay"></div>
                    <img
                      class="content-image img-fluid d-block mx-auto"
                      src="https://preview.colorlib.com/theme/shop/img/c2.jpg"
                      alt=""
                    />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Product for Couple</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-lg-12 ">
                <div class="content">
                  <a href="#" target="_blank">
                    <div class="content-overlay"></div>
                    <img
                      class="content-image img-fluid d-block mx-auto"
                      src="https://preview.colorlib.com/theme/shop/img/c3.jpg"
                      alt=""
                    />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Shop Now</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 mb-10">
            <div class="content">
              <a href="#" target="_blank">
                <div class="content-overlay"></div>
                <img
                  class="content-image img-fluid d-block mx-auto"
                  src="https://preview.colorlib.com/theme/shop/img/c4.jpg"
                  alt=""
                />
                <div class="content-details fadeIn-bottom">
                  <h3 class="content-title">Product For Men</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
