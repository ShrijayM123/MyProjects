import React from "react";
import {Link, useParams} from 'react-router-dom'

const Product = ({items, cart, setCart}) => {

const addToCart=(id, price,description, imgSrc, title)=>{

  const obj = {
    id, price,description, imgSrc, title
  }

  setCart([...cart,obj])
  console.log(cart)
}

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 my-4 text-center ">
                  <div className="card" style={{ width: "18rem" }}>
                    <Link to={`/product/${product.id}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={product.imgSrc}
                        className="card-img-top"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <button className="btn btn-primary mx-4">
                        {product.price} ₹
                      </button>
                      <button onClick={()=>addToCart(product.id, product.price,product.description, product.imgSrc, product.title)}
                      className="btn btn-warning">
                        Add to Cart
                        </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
