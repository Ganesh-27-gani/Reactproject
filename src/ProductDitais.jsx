import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import table from "./assets/Images/table.jpg";
import { useParams } from 'react-router-dom';
import { products } from './Products';
import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { IoIosAddCircleOutline } from 'react-icons/io'
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { add } from './Redux/CartSlice';
 




const ProductDitais = () => {
  const [product, setproduct] = useState(null)
  const { id } = useParams()
  const [description, setdescription] = useState("des")
  const [relative, setrelative] = useState([])
  const [ratings, setratings] = useState([])
  const [added, setAdded] = useState(false)
  const dispatch = useDispatch()
 
 

  useEffect(() => {
    fetchproducts()
  
  }, [id])

  const filtereddata = (data) => {

    const filters = products.filter((ele) => {
      return ele.category == data.category && data.id != ele.id
    })
    setrelative(filters)
  }

  const fetchproducts = () => {
    let [data] = products.filter((ele) => {
      return ele.id == id
    })
    setproduct(data)
    filtereddata(data)
    produtratings(data)
  }

  const descriptions = (mater) => {
    setdescription(mater)
  }

  const produtratings = (data)=>{
    setratings(data.reviews)
 }
const handleAdd = (product) =>{
  setAdded(true)
  dispatch(add(product))
}
 

  const notify = (ele) => {
    dispatch(add(ele))
    toast.success("Product has been added to cart!")
  
  }

  return (
    <>
      <Navbar />


      <div style={{ position: "relative" }}>
        {
          product ?
            <h5 style={{ position: "absolute", top: "100px", left: "40%", color: "white", zIndex: "5", fontSize: "38px", textAlign: "center" }}>{product.productName}</h5> : " "

        }
        <img style={{ width: "100%", height: "250px", }} src={table} alt="" />
        <div className="overlay" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "250px", background: " rgba(0, 0, 0, 0.6)" }} ></div>
      </div>


      {
        product ? <div className='container ' style={{ display: "flex", justifyContent: "space-between" }}>
          <div className=''>
            <img style={{ height: "450px", width: "100%", }} src={product.imgUrl} alt={product.productName} />
          </div>
          <div className='ps-5' style={{ marginTop: "70px", textAlign: "left", }}>
            <h2>{product.productName}</h2>
            <span >
              <h6 style={{ color: "#e9bb13", top: "50px", marginTop: "30px" }}> <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /><span style={{ color: "grey", marginLeft: "20px" }} >{product.avgRating} rating</span></h6>
            </span>
            <h6 style={{ fontSize: "20px", marginTop: "30px" }}>${product.price} <span style={{ marginLeft: "30px", color: "gray", fontSize: "17px" }}>category:{product.category}</span></h6>
            <p style={{ marginTop: "30px" }}>{product.shortDesc}</p>
            <input type="number" placeholder='1' style={{ marginTop: "30px", width: "10%" }} /><br />
            <button style={{ marginTop: "30px", borderRadius: "8px", padding: "4px", backgroundColor: "blue", color: "white" }} onClick={() => handleAdd(product)}>{added ? "addeded" : " Add To Cart"}</button>
          </div>
        </div> : " "
      }

      <div className='container mt-5'>
        {

          product ? <div className='container' style={{ textAlign: "left" }}>
            <div className='d-flex'>
              <p style={{ cursor: "pointer", color: description === "des" ? "black" : "grey" }} onClick={() => descriptions("des")}>Description </p>

              <p style={{ cursor: "pointer", marginLeft: "20px", color: description === "rev" ? "black" : "grey" }} onClick={() => descriptions("rev")}>Reviews(1)</p>
            </div>
            
             {
                description === "des" ? (
                  <p >{product.description}</p>
                ) : (
                  ratings.map((ele,id)=>(
                    <div key = {id}>
                  <p className=' text-warning'>{ele.rating}(rating)</p>
                  <p>{ele.text} </p>
                  </div>))
                )

              }

          </div> : ""

        }
      </div>

      <div className='container'>
        <h4 style={{ top: "280px", textAlign: "left" }}>You might also like</h4>
        <div className='row'>
          {

            relative.map((ele) => (
              <div className='col-4 col-4 d-grid' key={ele.id} >
                <Link to={`/productdetails/${ele.id}`} className="text-decoration-none"> <div className='card border gap-3 mb-4 '>
                  <p style={{ textAlign: "left", border: "1px solid blue", position: "absolute", padding: "2px", borderRadius: "10px", background: "#022f72", color: "white" }}>{ele.discount}%Off</p>
                  <img className='card-img-top' style={{ height: "350px" }} src={ele.imgUrl} alt={ele.productName} />
                  <div className='card-body' style={{ textAlign: "left" }}>
                    <h4 className='card-title'>{ele.productName} <br /><p style={{ color: "#f0be2a" }}> <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></p></h4>
                    <h6 className='card-text fw-bold fs-4'>${ele.price} </h6>
                  </div>
                </div>
                </Link>
            
                <div style={{ textAlign: "right", fontSize: "33px", position: "relative ", bottom: "90px", right: "20px", margin: "0", }} >
                 <IoIosAddCircleOutline onClick={() => notify(ele)} style={{ cursor: "pointer" }}/>
                    <ToastContainer style={{ fontSize: "15px" }} />
                </div>
               
              </div>
            ))
          }


        </div>
      </div>

      <Footer/>
      
    </>
  )
}

export default ProductDitais


