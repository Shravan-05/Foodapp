import { useState } from "react";
import NoteContext from "./Notecontext";
import React from 'react'
const Notestate = (props) => {
    const host = "http://localhost:7000";
    const initialcart = [];
    const initproduct =[]
    const [product, setproduct] = useState(initproduct);
    const [cart, setcart] = useState(initialcart);
    const[pop,setpop]=useState(0);
    const getproduct = async () => {
        const response = await fetch(`${host}/api/product/fetch`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          }
        });
        const json = await response.json();
        setproduct(json);
        // console.log(product);
      };
const addcart = async (name,price,url,size,value1) => {
  const response = await fetch(`${host}/api/cart/addcart`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "token":localStorage.getItem("token")
    },
    body: JSON.stringify({
      "name":name,
      "price":price,
      "url":url,
      "size":size,
      "qty":value1
    }),
  });
  // {
  //   "user": "66b5c6944bb283edaa87d460",
  //   "name": "pizza",
  //   "price": 234,
  //   "url": "ccfejen",
  //   "size": 5,
  //   "qty": 6,
  //   "_id": "66bcb74241d3e530825e49a9",
  //   "__v": 0
  // }
  const json = await response.json();
  setcart([...cart,json]);
  // console.log(product);
};
const fetchcart = async () => {
  const response = await fetch(`${host}/api/cart/fetchcart`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "token":localStorage.getItem("token")
    }
  });

  const json = await response.json();
  setcart(json);
};
const deletecart = async (id) => {
  const response = await fetch(`${host}/api/cart/deletecart/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "token":localStorage.getItem("token")
    }
  });

  const json = await response.json();
  let del=cart.filter((e)=>e._id!==id)
  setcart(del);
};
return (
<NoteContext.Provider
value={{product,getproduct,addcart,fetchcart,cart,deletecart}}
>
{props.children}
</NoteContext.Provider>
);
}

export default Notestate
