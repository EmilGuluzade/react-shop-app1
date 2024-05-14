import React, { useContext, useEffect, useState } from "react";
import { json, useParams } from "react-router";
import MainContext from "../../../context/context";
import axios from "axios";

const Detail = () => {
  const { setLoading, setError } = useContext(MainContext);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );


  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);

      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });

     
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket)); 
  }, [basket]);

  const addToBasket = (id) => {
    let basketItem = basket.find((e) => e.id == id);
    if (!basketItem) {
     

      setBasket([...basket,{ ...data,
                             count: 1,
                            totalPrice: data.price,
                           },
      ]);
    } else {
      basketItem.count++;
      basketItem.totalPrice = basketItem.price * basketItem.count;
      setBasket([...basket]);
    }
  };

  return (
    <div className="container d-flex  mt-5">
      <div className="col-6 d-flex justify-content-center  ">
        <img width="400px" height="400px" src={data.image} alt=""/>
      </div>
      <div className="col-6 d-flex flex-column justify-content-center ">
        <h3>{data.title}</h3>
        <h4>{data.price}$</h4>
        <p>{data.description}</p>
        <div>
          <button className="btn btn-success "
            onClick={()=>{
              addToBasket(data.id)
            }}
          >Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
