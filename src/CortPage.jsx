import React from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineX } from "react-icons/hi";
import { add, remove } from './Redux/CartSlice';


const CortPage = () => {
  const cartdata = useSelector(state => state.Cart)
  const dispatch = useDispatch()

  console.log(cartdata);

  const handelremov = (id) => {
    dispatch(remove(id))
  }

  const increment = (ele) => {
    dispatch(add(ele));
  }
  const decrement = (ele) => {
     dispatch(add(ele.id));
     
      
  }
  return (
    <>
    <Navbar />
    <div className="container mt-5">
      <div className="row">
       
        <div className="col-md-8">
          {cartdata.length > 0 ? (
            cartdata.map((ele) => (
              <div
                className="mb-3 p-3 d-flex align-items-center justify-content-between border rounded"
                key={ele.id}
              >
                <img 
                  src={ele.imgUrl} 
                  alt={ele.productName} 
                  style={{ width: "200px", height: "150px", objectFit: "cover", borderRadius: "5px" }} 
                />
                <div className="flex-grow-1 ms-5 text-start ">
                  <h5 className="mb-1">{ele.productName}</h5>
                  <p className="text-muted m-0">${ele.price}</p>
                </div>
                <HiOutlineX 
                  style={{ cursor: "pointer", fontSize: "40px",marginBottom:"50px" }} 
                  onClick={() => handelremov(ele.id)} 
                />
                <div   style={{marginTop:"70px",display:"flex",gap:"20px",position:"relative",right:"45px", }}>
                <button onClick={()=> decrement(ele)}>-</button>
                <span>{ele.quantity}</span>
                <button onClick={()=> increment(ele)}>+</button>
                </div>
                
              </div>
            ))
          ) : (
            <div className="text-start border p-5 ">
              <p className="m-0" style={{ fontSize: "20px", fontWeight: "bold", color: "#333"  }}>
                No items are add in cart
              </p>
            </div>
          )}
        </div>

        
        <div className="col-md-4">
          {cartdata.length > 0 && (
            <div className="border p-3 rounded text-start">
              <h5 className="border-bottom pb-2">Cart Summary</h5>
              <p className="mb-1"><strong>Total Items:</strong> {cartdata.length}</p>
              <p className="mb-0"><strong>Total Price:</strong> ${cartdata.reduce((acc, ele) => acc + ele.price, 0).toFixed(2)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  </>

  )
}

export default CortPage

// import React from 'react'
// import Navbar from './Navbar'
// import { useDispatch, useSelector } from 'react-redux'
// import { HiOutlineX } from "react-icons/hi";
// import { remove } from './Redux/CartSlice';


// const CortPage = () => {
//   const cartdata = useSelector(state => state.Cart)
//   const dispatch = useDispatch()

//   console.log(cartdata);

//   const handelremov = (id) => {
//     dispatch(remove(id))
//   }

//   return (
//     <>
//       <Navbar />
//       <div className='container mt-5' style={{ display: "flex", justifyContent: "space-between" }}>
//         <div className='row'>
//           <div className='col-8'>
//             {
//               cartdata.length > 0 ? cartdata.map((ele) => (

//                 <div className='mb-3 ' style={{
//                   border: "1px solid", display: "flex", justifyContent: "space-between", width: " 150vh", textAlign: "left", position: "relative", padding: "10px"

//                 }} key={ele.id}>
//                   <img style={{ width: "50%", height: "260px" }} src={ele.imgUrl} alt={ele.productName} />
//                   <h4 style={{ marginTop: "30px" }}>{ele.productName} </h4>
//                   <h6 style={{ left: "9px", fontSize: "35px", }} onClick={() => { handelremov(ele.id) }}><HiOutlineX />
//                   </h6>
//                   <h6 style={{ position: "absolute", marginTop: "13%", color: "gray", marginLeft: "25.6%" }}>${ele.price}</h6>
//                 </div>

//               )) : 

//                 <p className="empty-cart-text" style={{ fontSize: "20px", color: "#333", fontWeight: "bold", textAlign: "left", position: "absolute", top: "30%", border: "1px solid", width: "60%", height: "40%" }}>
//                   No Items are added in Cart
//                 </p>

//             }
//           </div>

//           <div className='col-4'>
//             {

//               cartdata.length > 0 ?
//                 <div className=' ms-5 ' style={{ border: "1px solid", width: " 70vh", textAlign: "left" }} >
//                   <h5 style={{ borderBottom: "1px solid", padding: "10px" }} >Cart Summary</h5>
//                   <p style={{ marginTop: "20px", }}> Total Items:  {cartdata.length}</p>
//                   <p > Total Price: <h6>{cartdata.reduce((acc, ele) => acc + ele.price, 0)} </h6> </p>

//                 </div> : ""
//             }
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default CortPage