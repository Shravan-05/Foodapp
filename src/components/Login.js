import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import NoteContext from '../context/Notecontext';
const Login = (props) => {
  const context = useContext(NoteContext);
  const { fetchcart } = context;
    const nav=useNavigate();
    const [value1,setvalue]=useState({email:'',password:''});
     const inputHandler=(e)=>{
        setvalue({ ...value1, [e.target.name]: e.target.value });
    }
    const submitHandler=async(e)=>{
        e.preventDefault();
            const response = await fetch("http://localhost:7000/api/auth/login", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                "email":value1.email,
                "password":value1.password
              }),
            });
           
            const json = await response.json();
            if(json.error1)
            {
                props.alertpop("Inavlid credentials","danger")
            }
            else
            {
                props.alertpop("Logined Successfully","success");
                nav("/")
            localStorage.setItem('token',json.authtoken);
            fetchcart();
            }
        setvalue({email:'',password:''})
    }
  return (
    <>
    <div className='container'>
    <form onSubmit={submitHandler}>

  <div className="mb-3">
    <label htmlFor="emial" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"  name='email'  value={value1.email} onChange={inputHandler}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"  name='password' value={value1.password}  onChange={inputHandler}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </>
  )
}

export default Login;
