import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
 

const Navbar = () => {
  return (
    <div> 
        <nav className="navbar navbar-expand navbar-light bg-light" style={{}}>
        <div className="container">
            <a className="navbar-brand" href=""> 
            <img src="https://lms.achieversit.com/assets/images/logo.png" alt=""  />
            </a>
             <div className="navbar-nav ">
                <Link to="/" className="nav-link text-dark fw-bold fs-5" aria-current="page" href="#">Home</Link>
                <Link to="/shoppage" className="nav-link text-dark fw-bold fs-5" href="#">Shop</Link>
                <Link to="/Cartpage" className="nav-link text-dark fw-bold fs-5" href="#">Cart</Link>
                <a className="nav-link text-dark fw-bold fs-5" href="#"><FaUser /></a>
                <a className="nav-link text-dark fw-bold fs-5" href="#"><FaShoppingCart /> </a>
            </div>
        </div>
        </nav>

    </div>
  )
}

export default Navbar