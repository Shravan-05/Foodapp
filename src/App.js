import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Notestate from './context/Notestate';
import Cart from './components/Cart';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [alert,setalert]=useState(null);
  const displayalert=(msg,type)=>{
    setalert({msg:msg,type:type})
    setInterval(() => {
      setalert(null)
    }, 1500);
  }
  return (
    <Notestate>
    <Router>
<Navbar/>
<Alert info={alert}/>
<Routes>
  <Route path="/" element={<Home alertpop={displayalert}/>}/>
  <Route path="/About" element={<Aboutus/>}/>
  <Route path="/cart" element={<Cart alertpop={displayalert}/>}/>
  <Route path="/signup" element={<Signup alertpop={displayalert}/>}/>
  <Route path="/login" element={<Login alertpop={displayalert}/>}/>
  <Route />
</Routes>
</Router>
</Notestate>
  );
}

export default App;
