import React from 'react'
import { discoutProducts } from './Products'
import { IoStar } from "react-icons/io5";
import { IoIosAddCircleOutline } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import { BiColorFill } from 'react-icons/bi';


const Discount = () => {

  const notify = () => toast("Product has been added to cart!");
  return (
    <> 
      <div className='container pt-5 bg-light'>
        <h2 className='pb-5'>Big Discount</h2>
        <div className='row'>
          {
            discoutProducts.map((ele) => (
              <div className='col-4  d-grid' key={ele.id}>
                <div className='card border gap-3 mb-4 ' style={{ }}>
                  <p style={{textAlign:"left" , border:"1px solid blue",position:"absolute", padding:"4px",borderRadius:"10px",background:"#022f72",color:"white"}}>{ele.discount}%Off</p>
                  <img className='card-img-top'style={{height:"310px"}} src={ele.imgUrl} alt={ele.productName} />
                  <div className='card-body'style={{textAlign:"left"}}>
                    <h4 className='card-title'>{ele.productName} <br /><p style={{color:"yellow"}}> <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></p></h4>
                    <h6 className='card-text fw-bold fs-4'>${ele.price}   <p style={{textAlign:"right",fontSize:"33px",position:"relative ",bottom:"40px",  margin:"0",BiColorFill:"red" }}onClick={notify}><IoIosAddCircleOutline /><ToastContainer style={{fontSize:"15px"}}/></p></h6>
                  </div>
                
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Discount



 