import React, { useState } from 'react';
import { useContext } from 'react';
import NoteContext from '../context/Notecontext';
import Navbar from './Navbar';

const Productitems = (props) => {
  const { name, price, urltoimage } = props.details;
  const context = useContext(NoteContext);
  const { addcart,cart} = context;
  const [value1, setValue] = useState('1');
  const [size, setSize] = useState('Half');
const [amount,setamount]=useState(price);
const productupdate=(qty,selectsize)=>{
let productupdated=qty*price;
if(selectsize==='Full')
{
  productupdated*=2;
}
setamount(productupdated);
}
  const handleQuantityChange = (e) => {
    let qty=Number(e.target.value);
    setValue(e.target.value);
    productupdate(qty,size); 
  };

  const handleSizeChange = (e) => {
    let selectsize=e.target.value;
    setSize(e.target.value);
  productupdate(value1,selectsize); 
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    addcart(name, amount, urltoimage, size, value1);
  };

  return (
    <>
<div className="card" style={{ width: "18rem" }}>
  <img src={urltoimage} className="card-img-top" alt={name} style={{ height: "200px", objectFit: "cover" }} />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <div className='d-flex justify-content-evenly align-items-center my-2' >
      <select className='h-100 bg-success text-white rounded ' onChange={handleQuantityChange} value={value1} style={{padding:"5px"}} >
        {Array.from(Array(6), (e, i) => (
          <option key={i + 1} value={i + 1}>{i + 1}</option>
        ))}
      </select>
      <select className='h-100 bg-success text-white rounded' onChange={handleSizeChange} value={size} style={{padding:"5px"}}>
        <option value="Half">Half</option>
        <option value="Full">Full</option>
      </select>
      <div>
        <h5>{'₹ ' + amount}</h5>
      </div>
    </div>
    <a href="#" className="btn btn-primary my-2" onClick={handleAddToCart}>Add to cart</a>
  </div>
</div>
</>
  );
}

export default Productitems;
