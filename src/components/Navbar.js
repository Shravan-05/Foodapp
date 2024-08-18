import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NoteContext from '../context/Notecontext';

const Navbar = () => {
  const context = useContext(NoteContext);
  const { cart,fetchcart } = context;
  let location = useLocation();
  let navi = useNavigate();
  const totalQuantity = cart.reduce((total, item) => total + Number(item.qty), 0);

  const opencart = () => {
    navi("/cart");
  };

  const logout = () => {
    navi("/login");
    localStorage.removeItem("token");
  };


  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`} to="/About">About Us</Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            {localStorage.getItem("token") ? (
              <button type="button" className="btn btn-primary position-relative" onClick={opencart}>
                Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalQuantity}
                </span>
              </button>
            ) : ''}
            
            {localStorage.getItem("token") ? (
              <button className="btn btn-outline-success mx-2" type="submit" onClick={logout}>
                Logout
              </button>
            ) : (
              <>
                <button className="btn btn-outline-success mx-2" type="submit" onClick={() => navi("/login")}>
                  Login
                </button>
                <button className="btn btn-outline-success mx-2" type="submit" onClick={() => navi("/signup")}>
                  Sign-Up
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
