import React from 'react'
import { FaCar, FaCreditCard } from 'react-icons/fa'
import { IoHeadset } from 'react-icons/io5'
import { MdSecurity } from 'react-icons/md'

const Cards = () => {
  return (
    <div>
     <div className='container pb-5 pt-5'>
      <div className="row row-cols-1 row-cols-md-4 g-3">
       <div className="col">
         <div className="card h-100 bg- bg-warning">
          <h3><FaCar /></h3>
            <div className="card-body">
            <h5 className="card-title text-white">Free Shipping</h5>
            <p className="card-text text-white">Lorem ipsum dolor sit amet</p>
            </div>
         </div>
        </div>
        <div className="col">
         <div className="card h-100 bg-info ">
         <h3><FaCreditCard /></h3>
          <div className="card-body">
            <h5 className="card-title text-white">Safe Payment</h5>
            <p className="card-text text-white">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
         </div>
            <div className="col">
            <div className="card h-100 bg-success">
             <h3><MdSecurity /></h3>
            <div className="card-body">
            <h5 className="card-title text-white">Secure payment</h5>
            <p className="card-text text-white">Lorem ipsum dolor sit amet</p>
            </div>
            </div>
            </div>
            <div className="col">
            <div className="card h-100 bg-primary">
             <h3><IoHeadset /></h3>
            <div className="card-body">
            <h5 className="card-title text-white">Back Guarantee</h5>
            <p className="card-text text-white">Lorem ipsum dolor sit amet</p>
          </div>
         </div>
        </div>
      </div>
     </div>
   </div>
    
  )
}

export default Cards