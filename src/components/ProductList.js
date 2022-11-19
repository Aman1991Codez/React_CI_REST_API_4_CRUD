import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const ProductList = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getProducts();

    },[]);
  
  const getProducts = async () => {
    const products = await axios.get('http://localhost:8080/products');
    // console.log(products.data);
    setProducts(products.data);
} 

  const deleteProduct = async (id) => {
    await axios.delete('https://localhost:8080/products/${id}');
    getProducts();
  }


    return (
      
    <div>
      
      {/* <marquee><h4><b>Front-End Use Rest API on React Consume and Backend Use CI 4  
      </b></h4></marquee>
      <hr></hr> */}
      <Link to= "/add" className="button is-primary mt-5">Add New</Link>
       
      <table className="table is-striped is-fullwidth">
        <thead>
            <tr>
                <th>No </th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
       { products.map((product, index) =>(
        <tr key= {product.id}>
               <td>{index + 1}</td>
               <td>{product.title}</td>
               <td>{product.price}</td>
               <td>
               <Link to= {'/edit/${product.id}'} className="button is-small is-info">Edit</Link>
                <button  onClick= {() => deleteProduct(product.id)}className="button is-small is-danger">Delete</button>
               </td>
            </tr>
       ))}
        </tbody>
      </table>
</div>
  )
}

export default ProductList
