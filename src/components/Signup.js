import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
    const nav=useNavigate();
    const [value1,setvalue]=useState({name:'',email:'',password:'',cpassword:''})
     const inputHandler=(e)=>{
        setvalue({ ...value1, [e.target.name]: e.target.value });
    }
    const submitHandler=async(e)=>{
        e.preventDefault();
        if(value1.cpassword===value1.password)
        {
            const response = await fetch("http://localhost:7000/api/auth/newuser", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                "name":value1.name,
                "email":value1.email,
                "password":value1.password
              }),
            });
           
          
            const json = await response.json();
            if(json.error1)
            {
                props.alertpop("invalid crendentails","danger")
            }
            else
            {
                props.alertpop("Account created Sccuessfully","success")
            localStorage.setItem('token',json.authtoken)
            nav("/login")
            }
        }        
        else
        {
            alert("invalid credentilas")
        }
        setvalue({name:'',email:'',password:'',cpassword:''})
    }
  return (
    <>
    <div className='container'>
    <form onSubmit={submitHandler}>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='name' value={value1.name} onChange={inputHandler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="emial" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"  name='email'  value={value1.email} onChange={inputHandler}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"  name='password' value={value1.password}  onChange={inputHandler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword"  name='cpassword' value={value1.cpassword}  onChange={inputHandler}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </>
  )
}

export default Signup
