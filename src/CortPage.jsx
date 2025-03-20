import React from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineX } from "react-icons/hi";
import { remove } from './Redux/CartSlice';


const CortPage = () => {
  const cartdata = useSelector(state => state.Cart)
  const dispatch = useDispatch()

  console.log(cartdata);
  
 const handelremov = (id) =>{
    dispatch(remove(id))
  }
  
  return (
    <> 
    <Navbar/>
   <h1>hllo</h1>
    {
       cartdata.length > 0 ? cartdata.map((ele)=>(
        <div className='container'key={ele.id}>
        <div className='row' >
        <div className='col-8  mb-3 ' style={{border:"1px solid",display:"flex",  justifyContent:"space-between"}} >
          <img style={{width:"35%",height:"260px"}} src={ele.imgUrl} alt={ele.productName} />
          <h4 style={{marginTop:"30px"}}>{ele.productName}
          </h4>
           
          <h6 style={{left:"9px",fontSize:"35px",}} onClick={()=>{handelremov(ele.id)} }><HiOutlineX />
          </h6>
          <h6 style={{position:"absolute", marginTop:"13%",color:"gray",marginLeft:"25.6%" }}>${ele.price}</h6>
        </div>
        <div className='col-3 ms-5 ' style={{border:"1px solid",display:"flex",  justifyContent:"space-between",}}>
         <h5 style={{ position:"absolute"}} >Cart Summary</h5>
           
          <p>Total Price</p>
        </div>

      </div>
      </div>
      )) : <h2>no data</h2>
    }
    </>
  )
}

export default CortPage