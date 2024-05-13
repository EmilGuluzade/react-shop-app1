import React, { useEffect, useState } from "react";

const Basket = () => {
  const [basket, setBasket] = useState(
    localStorage.getItem("basket")
      ? JSON.parse(localStorage.getItem("basket"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  function deleteHandler(id) {
    let basketItem = basket.find((e) => e.id == id);

    if (basketItem.count > 1) {
      basketItem.count--;
      basketItem.totalPrice = basketItem.price * basketItem.count;
      setBasket([...basket]);
    } else {
      setBasket([...basket.filter((e) => e.id != id)]);
    }
  }

  const addToBasket = (id) => {
    let basketItem = basket.find((e) => e.id == id);

    basketItem.count++;
    basketItem.totalPrice = basketItem.price * basketItem.count;
    setBasket([...basket]);
  };
  return (
    <div className="container">
      <table class="table mt-5 ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
            <th scope="col">Add</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={item.image} alt="" width="100px" height="100px" />
              </td>
              <td>{item.title}</td>
              <td>{item.count}</td>

              <td>{item.totalPrice}$</td>
              <td>
                <button
                  onClick={() => {
                    deleteHandler(item.id);
                  }}
                  className="btn btn-danger "
                >
                  delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    addToBasket(item.id);
                  }}
                  className="btn btn-primary "
                >
                  Add
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Basket;
