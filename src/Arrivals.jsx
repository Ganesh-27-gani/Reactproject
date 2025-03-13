import React, { useEffect, useState } from 'react'
import { products } from './Products'
import { IoStar } from 'react-icons/io5'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { ToastContainer, toast } from 'react-toastify';
 

const Arrivals = () => {

    const notify = () => toast("Product has been added to cart!");
  

     const[filtered,setArrivals]=useState([])
     useEffect(()=>{
       const filterproduct= products.filter((ele)=>{
             return ele.category == 'mobile' || ele.category == 'wireless'
        })
        setArrivals(filterproduct)
     },[])
     console.log(filtered);
     
      
    
  return (

     <>
        <div className='container pt-5 '>
               <h2 className='pb-5'>New Arrivals</h2>
               <div className='row'>
                 {
                   filtered.map((ele) => (
                     <div className='col-4 col-4 d-grid' key={ele.id}>
                       <div className='card border gap-3 mb-4 '>
                          <img className='card-img-top'style={{height:"310px"}} src={ele.imgUrl} alt={ele.productName} />
                         <div className='card-body'style={{textAlign:"left"}}>
                        <h4 className='card-title'>{ele.productName} <br /><p style={{color:"yellow"}}> <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></p></h4>
                        <h6 className='card-text fw-bold fs-4'>${ele.price}   <p style={{textAlign:"right",fontSize:"30px",position:"relative ",bottom:"40px",  margin:"0"}} onClick={notify}><IoIosAddCircleOutline /><ToastContainer style={{fontSize:"15px"}}/></p></h6>
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

export default Arrivals


// const [Arrivals,setArrivals]=useState([])
//     useEffect(()=>{
//         const filtered =products.filter((ele)=>{
//             return ele.category=="mobile" || ele.category=="wireless"
//         })
//         setArrivals(filtered)
        
//     },[])
      
//       console.log(Arrivals);