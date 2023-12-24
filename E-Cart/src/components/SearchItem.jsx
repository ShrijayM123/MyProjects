import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

const SearchItem = ({cart, setCart}) => {
  console.log(useParams());
  const { term } = useParams();
  const [filteredData, setfilteredData] = useState([])

  useEffect(() => {
     const filteredData = () =>{
         const data = items.filter((p)=>p.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
         //console.log(data)
         setfilteredData(data)
     }
     filteredData();
  }, [term])

return (
    <Product cart ={cart} setCart={setCart} items={filteredData}/>
    )
};

export default SearchItem;
