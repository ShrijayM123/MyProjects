import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

const ProductDetail = ({cart, setCart}) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setrelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);

    const relatedProducts = items.filter(
      (myProduct) => myProduct.category === product.category
    );
    setrelatedProducts(relatedProducts);
  }, [id, product.category]);

  const addToCart=(id, price,description, imgSrc, title)=>{

    const obj = {
      id, price,description, imgSrc, title
    }
  
    setCart([...cart,obj])
    console.log(cart)
  }

  return (
    <>
    <div className="container con">
      <div className="img">
        <img src={product.imgSrc} alt="" />
      </div>
      <div className="card-body1">
        <h1 className="card-title">{product.title}</h1>
        <p className="card-text">{product.description}</p>
        <button className="btn btn-primary mx-4">{product.price} ₹</button>
        <button onClick={()=>addToCart(product.id, product.price,product.description, product.imgSrc, product.title)} className="btn btn-warning">Add to Cart</button>
      </div>
    </div>
    <h1 className="text-center"> Explore More </h1>
    <Product cart ={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};

export default ProductDetail;
