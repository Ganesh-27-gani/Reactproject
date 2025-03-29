import React, { useEffect, useState } from 'react'
import { products } from './Products'
import { IoStar } from 'react-icons/io5'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from './Redux/CartSlice';
 

const Arrivals = () => {

     const[filtered,setArrivals]=useState([])
      const  dispatch = useDispatch()

     useEffect(()=>{
       const filterproduct= products.filter((ele)=>{
             return ele.category == 'mobile' || ele.category == 'wireless'
        })
        setArrivals(filterproduct)
     },[])

     const notify = (ele) => 
      {
         dispatch(add(ele))
        toast.success("Product has been added to cart!");
      }
       
      
    
  return (

     <>
        <div className='container pt-5 '>
               <h2 className='pb-5'>New Arrivals</h2>
               <div className='row'>
                 {
                   filtered.map((ele) => (
                      <div className='col-4 col-4 d-grid' key={ele.id}>
                        <Link to={`/productdetails/${ele.id}`} className="text-decoration-none"> <div className='card border gap-3 mb-4 '>
                    <img className='card-img-top' style={{ height: "350px" }} src={ele.imgUrl} alt={ele.productName} />
                    <div className='card-body ' style={{ textAlign: "left", }}>
                      <h4 className='card-title '>{ele.productName} <br /><p style={{ color: "#f0be2a" }}> <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></p></h4>
                      <h6 className='card-text fw-bold fs-4 '>${ele.price} </h6>
                    </div>
                  </div>
                </Link>
                <div style={{ textAlign: "right", fontSize: "33px", position: "relative ",bottom:"90px",right:"20px",margin: "0", }} >
                  <IoIosAddCircleOutline onClick={() => notify(ele) } style={{ cursor: "pointer" }}/>
                    <ToastContainer style={{ fontSize: "15px" }} />
                </div>
              </div>
                   ))
                 }
               </div>
             </div>
     </>
  )
}

export default Arrivals

// onClick={() => notify(product)} style={{ cursor: "pointer" }}


// const [Arrivals,setArrivals]=useState([])
//     useEffect(()=>{
//         const filtered =products.filter((ele)=>{
//             return ele.category=="mobile" || ele.category=="wireless"
//         })
//         setArrivals(filtered)
        
//     },[])
      
//       console.log(Arrivals);