import React from 'react'
import { FaCar, FaCreditCard } from 'react-icons/fa'
import { IoHeadset } from 'react-icons/io5'
import { MdSecurity } from 'react-icons/md'

const Cards = () => {
  return (
    <div>
     <div className='container pb-5'>
      <div className="row row-cols-1 row-cols-md-4 g-3 " >
       <div className="col">
         <div className="card  p-5" style={{backgroundColor:"#fdefe6"}}>
          <h3  className='rounded-circle' ><FaCar style={{background: "white",borderRadius:" 50%", padding: "5px", fontSize: "40px",}}/></h3>
            <div className="card-body" >
            <h5 className="card-title fs-4">Free Shipping</h5>
            <p className="card-text ">Lorem ipsum dolor sit amet</p>
            </div>
         </div>
        </div>
        <div className="col">
         <div className="card h-100 p-5" style={{backgroundColor:"#ceebe9"}}>
         <h3><FaCreditCard  style={{background: "white",borderRadius:" 50%", padding: "5px", fontSize: "40px",}}/></h3>
          <div className="card-body">
            <h5 className="card-title fs-4">Safe Payment</h5>
            <p className="card-text  ">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
         </div>
            <div className="col">
            <div className="card h-100 p-5" style={{backgroundColor:"#e2f2b2"}}>
             <h3><MdSecurity  style={{background: "white",borderRadius:" 50%", padding: "5px", fontSize: "40px",}}/></h3>
            <div className="card-body">
            <h5 className="card-title fs-4">Secure payment</h5>
            <p className="card-text ">Lorem ipsum dolor sit amet</p>
            </div>
            </div>
            </div>
            <div className="col">
            <div className="card h-100 p-5 " style={{backgroundColor:"#d6e5fb"}}>
             <h3><IoHeadset style={{background: "white",borderRadius:" 50%", padding: "5px", fontSize: "40px",}} /></h3>
            <div className="card-body">
            <h5 className="card-title fs-4">Back Guarantee</h5>
            <p className="card-text">Lorem ipsum dolor sit amet</p>
          </div>
         </div>
        </div>
      </div>
     </div>
   </div>
    
  )
}

export default Cards