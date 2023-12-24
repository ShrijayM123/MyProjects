import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { items } from "./Data";
import { BsCart4 } from "react-icons/bs";

const Navbar = ({ setData, cart }) => {
  const navigate = useNavigate();
  const location = useLocation()
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    //console.log(element)
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    //console.log(element)
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <div>
      <>
        <header className="sticky-top">
          <div className="nav-bar">
            <Link to="/" className="brand">
              E-Cart{" "}
            </Link>
            <form onSubmit={handleSubmit} className="search-bar">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Search Products"
              />
            </form>
            <Link to="/cart" className="cart">
              <button type="button" class="btn btn-primary position-relative">
              <BsCart4 style={{fontSize:'30'}} />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>
          </div>
        {
          location.pathname == '/' &&
          <div className="nav-bar-wrapper">
          <div className="items">Filter by {"->"}</div>
          <div className="items" onClick={() => setData(items)}>
            No Filter
          </div>
          <div className="items" onClick={() => filterByCategory("mobiles")}>
            Mobiles
          </div>
          <div className="items" onClick={() => filterByCategory("laptops")}>
            Laptops
          </div>
          <div className="items" onClick={() => filterByCategory("tablets")}>
            Tablets
          </div>
          <div className="items" onClick={() => filterByPrice(19999)}>
            {">=19999"}
          </div>
          <div className="items" onClick={() => filterByPrice(29999)}>
            {">=29999"}
          </div>
          <div className="items" onClick={() => filterByPrice(39999)}>
            {">=39999"}
          </div>
          <div className="items" onClick={() => filterByPrice(49999)}>
            {">=49999"}
          </div>
        </div>
        }
         
        </header>
      </>
    </div>
  );
};

export default Navbar;
