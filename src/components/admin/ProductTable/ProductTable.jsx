import React, { useContext } from 'react'
import MainContext from '../../../context/context';
import axios from 'axios';

const ProductTable = () => {
    const {products,setProducts}=useContext(MainContext)
   function deleteItem(id){
    axios.delete(`http://localhost:3000/products/${id}`).then((res)=>{
        setProducts([...products.filter((item)=>item.id!=res.data.id)])
    }).catch((err) => {
        setError(err);
        setLoading(false);
      })
   }
  return (
    <table class=" mt-5  container table table-hover table-dark table-striped-columns">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>
              <img src={item.image} alt="" width="100px" height="100px" />
            </td>
            <td>{item.title}</td>
            <td>{item.category}</td>

            <td>{item.description}</td>

            <td>{item.price}$</td>
            <td>
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
                className="btn btn-danger "
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductTable
