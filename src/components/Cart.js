import React, { useEffect, useContext } from 'react';
import NoteContext from '../context/Notecontext';

const Cart = (props) => {
    const context = useContext(NoteContext);
    const { fetchcart, cart,deletecart } = context;
    let tot=0;
    useEffect(() => {
      if(localStorage.getItem('token'))
      {
        fetchcart(); // Fetch products on component mount\
      }
    }, []);
    console.log(cart);
const deleteietms=(e)=>{
  deletecart(e._id)
  props.alertpop("deleted the item","success")
}
    return (
        <>
      <div className='container'>
  {/* Display message if cart is empty */}
  {cart.length === 0 ? (
    <h1 className='text-center'>Cart is Empty</h1>
  ) : (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Size</th>
            <th scope="col">Qty</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((e, i) => (
            <tr key={e._id}>
              <th scope="row">{i + 1}</th>
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td>{e.size}</td>
              <td>{e.qty}</td>
              <td>
                <button onClick={() => deleteietms(e)} className='btn btn-danger'>Delete</button>
              </td>
              <td style={{ display: "none" }}>{tot = tot + e.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
  <p className='text-center' style={{ fontSize: "20px" }}>Total: {'₹ ' + tot}</p>
</div>

                
        </>
    );
}

export default Cart;
