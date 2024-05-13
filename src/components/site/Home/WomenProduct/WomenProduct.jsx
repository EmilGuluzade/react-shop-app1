import React, { useContext, useEffect, useState } from "react";
import "./WomenProduct.css";
import MainContext from "../../../../context/context";
import { Link } from "react-router-dom";
const WomenProduct = () => {
  const [women, setWomen] = useState([]);
  const { products} = useContext(MainContext);
  const [inpVal, setInpval] = useState("");
  const [priceSelVal, setPriceSelVal] = useState("default");
  const [searched, setSearched] = useState([]);
  useEffect(() => {
    setWomen([...products.filter((item) => item.category == "women")]);
  }, [products]);
  useEffect(() => {
   
        if (inpVal.trim() != "") {
          const result = women.filter((item) => {
            return item.title
              .split(" ")
              .join("")
              .toLowerCase()
              .includes(inpVal.trim().toLowerCase());
          });

          if (priceSelVal == "htl") {
            let sorted = result.sort((a, b) => b.price - a.price);
            setSearched([...sorted]);
          } else if (priceSelVal == "lth") {
            let sorted = result.sort((a, b) => a.price - b.price);
            setSearched([...sorted]);
          } else {
            setSearched([...result]);
          }
        } else {
          const result = women;
          if (priceSelVal == "htl") {
            let sorted = result.sort((a, b) => b.price - a.price);

            setSearched([...sorted]);
          } else if (priceSelVal == "lth") {
            let sorted = result.sort((a, b) => a.price - b.price);

            setSearched([...sorted]);
          } else {
            setSearched([...result]);
          }
        }
      
  }, [inpVal, priceSelVal]);
  return (
    <section className="women-product-area section-gap relative" id="men">
      <div className="container">
      <div className="row  mb-5 ">
                <div className="col-4  ">
                  <label className="mx-3" htmlFor="search">
                    Search by name
                  </label>
                  <input
                    type="search"
                    id="search"
                    value={inpVal}
                    onChange={(e) => {
                      setInpval(e.target.value);
                    }}
                  />
                </div>
                <div className="col-4">
                  <label className="mx-3" htmlFor="search">
                    Sort by price
                  </label>
                  <select
                    onChange={(e) => {
                      setPriceSelVal(e.target.value);
                    }}
                    value={priceSelVal}
                    name=""
                    id=""
                  >
                    <option value="default">Default</option>
                    <option value="htl">High to Low</option>
                    <option value="lth">Low to High</option>
                  </select>
                </div>
                
              </div>
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-40">
            <div className="title text-center">
              <h1 className=" mb-10">New realeased Products for Men</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {searched.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 single-product">
              <div className="content">
                <div className="content-overlay"></div>
                <img
                  className="content-image   card__img  d-block mx-auto"
                  src={item.image}
                  alt=""
                />
                <div className="content-details fadeIn-bottom">
                  <div className="bottom d-flex align-items-center justify-content-center">
                    <Link to="#">
                      <span className="lnr lnr-heart">
                        <i class="fa-regular fa-heart"></i>
                      </span>
                    </Link>
                    <Link to="#">
                      <span className="lnr lnr-layers">
                        <i class="fa-solid fa-layer-group"></i>
                      </span>
                    </Link>
                    <Link to="#">
                      <span className="lnr lnr-cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                      </span>
                    </Link>
                    <Link to={`/detail/${item.id}`} data-toggle="modal" data-target="#exampleModal">
                      <span className="lnr lnr-frame-expand">
                        <i class="fa-solid fa-expand"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="price">
                <h5 className="">{item.title}</h5>
                <h3 className="">${item.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WomenProduct;
