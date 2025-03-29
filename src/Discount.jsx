import React, { useState } from 'react'
import { discoutProducts } from './Products'
import { IoStar } from "react-icons/io5";
import { IoIosAddCircleOutline } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import { BiColorFill } from 'react-icons/bi';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from './Redux/CartSlice';


const Discount = () => {
  // const [addnotify, setAddnotify] = useState(false)
  const  dispatch = useDispatch()
    const {id} =  useParams()

  const notify = (ele) => {
    
     dispatch(add(ele))
     toast.success("Product has been added to cart!");
 
   }
  return (
    <>
      <div className='container pt-5 bg-light'>
        <h2 className='pb-5'>Big Discount</h2>
        <div className='row'>
          {
            discoutProducts.map((ele) => (
              <div className='col-4  d-grid' key={ele.id}>

                <Link to={`/productdetails/${ele.id}`} className="text-decoration-none"> <div className='card border gap-3 mb-4 '>
                  <p style={{ textAlign: "left", border: "1px solid blue", position: "absolute", padding: "2px", borderRadius: "10px", background: "#022f72", color: "white" }}>{ele.discount}%Off</p>
                  <img className='card-img-top' style={{ height: "350px" }} src={ele.imgUrl} alt={ele.productName} />
                  <div className='card-body' style={{ textAlign: "left" }}>
                    <h4 className='card-title'>{ele.productName} <br /><p style={{ color: "#f0be2a" }}> <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></p></h4>
                    <h6 className='card-text fw-bold fs-4'>${ele.price} </h6>
                  </div>
                </div>
                </Link>
                <div style={{ textAlign: "right", fontSize: "33px", position: "relative ",bottom:"90px",right:"20px",margin: "0", }} >
                  <IoIosAddCircleOutline onClick={() => notify(ele)} style={{ cursor: "pointer" }}/>
                </div>
                <ToastContainer />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Discount



