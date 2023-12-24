import React from "react";
import { Link, useParams } from "react-router-dom";



const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="container1" style={{ paddingTop: "10%" }}>
        {cart.length === 0 ? (
          <div className="text-center emp">
            <h1>Your cart is Empty</h1>
            <Link to={"/"} className="btn btn-warning">
              {" "}
              Continue Shopping ...
            </Link>
          </div>
        ) : (
          cart.map((product) => {
            return (
              <>
                <div
                  class="card mb-3 "
                  style={{ width: "700px", marginLeft: "400px" }}
                >
                  <div class="row g-0">
                    <div class="col-md-4 text-center">
                      <img
                        src={product.imgSrc}
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8 mt-5">
                      <div class="card-body text-center">
                        <h5 class="card-title">{product.title}</h5>
                        <p class="card-text">{product.description}</p>
                        <button className="btn btn-primary mx-4">
                          {product.price} ₹
                        </button>
                        <button className="btn btn-warning">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>

      {
        cart.length != 0 && 
        <div
        className="btncontainer text-center my-5"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
         
        }}
      >
        <button className="btn btn-warning mx-4">Checkout</button>
        <button onClick={()=>setCart("")} className="btn btn-danger ">Clear cart</button>
      </div>
      }
      
    </>
  );
};

export default Cart;
