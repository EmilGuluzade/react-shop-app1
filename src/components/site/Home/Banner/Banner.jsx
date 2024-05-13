import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner-area relative" id="home">
      <div className="container-fluid">
        <div
          className="row fullscreen align-items-center justify-content-center"
          style={{height: "738px"}}
        >
          <div className="col-lg-6 col-md-12 d-flex align-self-end img-right no-padding">
            <img className="img-fluid" src="https://preview.colorlib.com/theme/shop/img/header-img.png" alt="" />
          </div>
          <div className="banner-content col-lg-6 col-md-12">
            <h1 className="title-top">
              <span>Flat</span> 75%Off
            </h1>
            <h1 className="text-uppercase">
              It’s Happening <br />
              this Season!
            </h1>
            <button className="primary-btn text-uppercase">
              <a href="#">Purchase Now</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
