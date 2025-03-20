import React from 'react'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoBag } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Shoppage from './Shoppage'

const Navibar2 = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="container ">
                    <div className="navbar-brand" style={{display:"flex",}}>
                      <p className='pt-1 me-1'><IoBag /></p>
                      <h4 className='pt-2'>MART</h4>
                    </div>
                    <div className="navbar-nav " >
                        <a className="nav-link text-dark fw-bold fs-5" aria-current="page" href="#">Home</a>
                        <Link  className="nav-link text-dark fw-bold fs-5" href="#">Shop</Link>
                        <a className="nav-link text-dark fw-bold fs-5" href="#">Cart</a>
                        <a className="nav-link text-dark fw-bold fs-5" href="#"><FaUser /></a>
                        <a className="nav-link text-dark fw-bold fs-5" href="#"><FaShoppingCart /> </a>

                    </div>
                </div>
            </nav>

           <Shoppage/>

        </div>
    )
}

export default Navibar2