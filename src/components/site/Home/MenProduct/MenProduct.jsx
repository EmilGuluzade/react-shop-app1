import React, { useContext, useEffect, useState } from "react";
import "./MenProduct.css";
import MainContext from "../../../../context/context";
import { Link } from "react-router-dom";
const ProductSection = () => {
  const [men,setMen]=useState([])
  const {products}=useContext(MainContext)
  const [inpVal, setInpval] = useState("");
  const [priceSelVal, setPriceSelVal] = useState("default");
 useEffect(()=>{
  setMen([...products.filter((item)=>item.category=="men")])
 },[products])
  return (
    <section className="men-product-area section-gap relative" id="men">
      <div className="overlay overlay-bg"></div>
      <div className="container">
      
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-40">
            <div className="title text-center">
              <h1 className="text-white mb-10">
                New realeased Products for Men
              </h1>
              <p className="text-white">
                Who are in extremely love with eco friendly system.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
         {
          men.map((item,index)=>(
            <div key={index} className="col-lg-3 col-md-6 single-product">
            <div className="content">
              <div  className="content-overlay"></div>
              <img 
          
                className="content-image card__img  d-block mx-auto"
                src={item.image}
                alt=""
              />
              <div className="content-details fadeIn-bottom">
                <div className="bottom d-flex align-items-center justify-content-center">
                  <Link href="#">
                    <span className="lnr lnr-heart"><i class="fa-regular fa-heart"></i></span>
                  </Link>
                  <Link href="#">
                    <span className="lnr lnr-layers"><i class="fa-solid fa-layer-group"></i></span>
                  </Link>
                  <Link href="#">
                    <span className="lnr lnr-cart"><i class="fa-solid fa-cart-shopping"></i></span>
                  </Link>
                  <Link to={`/detail/${item.id}`} data-toggle="modal" data-target="#exampleModal">
                    <span className="lnr lnr-frame-expand"><i class="fa-solid fa-expand"></i></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="price">
              <h5 className="text-white">{item.title}</h5>
              <h3 className="text-white">${item.price}</h3>
            </div>
          </div>
          ))
         }
          
          
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
