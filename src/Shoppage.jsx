import React, { useEffect, useState } from 'react'
import { products } from './Products'
import table from "./assets/Images/table.jpg";
import { useParams } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import Navbar from './Navbar';
import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { IoIosAddCircleOutline } from 'react-icons/io'
import Footer from './Footer';



const Shoppage = () => {

    const [category, setcategory] = useState("Filter By Category")
    const [filteredProducts, setfilteredProducts] = useState([])

    useEffect(()=>{
        let searchpage = products.filter((ele) =>
            ele.category == 'sofa'
    )
    setfilteredProducts(searchpage)
    }, [])

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.innerText;

        let changepage = products.filter((ele) =>
            ele.category == selectedCategory
        )
        setcategory(selectedCategory)
        setfilteredProducts(changepage)
    }


    const notify = () => toast.success("Product has been added to cart!");

    const handleSearch = (event) => {
        const search = event.target.value;
       if(search === ""){ 
        let searchpage = products.filter((ele) =>
            ele.category == 'sofa'
    )
        setfilteredProducts(searchpage)
         }
        else{
            const searchProds = products.filter((ele) =>
                ele.productName.toLowerCase().includes(search.toLowerCase()))
              
            setfilteredProducts(searchProds)
         
        }
        

        

    };

     



    return (
        <>
            <Navbar />
            <div style={{ position: "relative" }}>


                <h5 style={{ position: "absolute", top: "100px", left: "40%", color: "white", zIndex: "5", fontSize: "38px", textAlign: "center" }}>Product</h5>


                <img style={{ width: "100%", height: "260px", }} src={table} alt="" />
                <div className="overlay" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "260px", background: " rgba(0, 0, 0, 0.6)" }} ></div>
            </div>
            <div style={{ display: "flex" }}>
                <div className="dropdown ms-5" >
                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginTop: "30px", width: "100%", backgroundColor: "#0c0631", color: "white" }}>
                        {category}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" onClick={(event) => handleCategoryChange(event)}>
                        <li><a className="dropdown-item" href="#">sofa</a></li>
                        <li><a className="dropdown-item" href="#">chair</a></li>
                        <li><a className="dropdown-item" href="#">watch</a></li>
                        <li><a className="dropdown-item" href="#">mobile</a></li>
                        <li><a className="dropdown-item" href="#">wireless</a></li>
                    </ul>
                </div>
                <div className="container-fluid">
                    <form className="d-flex">

                        <input className="form-control me-5 "  placeholder="Search"  aria-label="Search"  style={{ marginTop: "30px", marginLeft: "40%", borderRadius: "20px" }} onChange={(event) => handleSearch(event)}/>
                        <span style={{ position: "relative", top: "33px", right: "80px" }} ><IoIosSearch /></span>
                    </form>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='row'>
                    {
                         filteredProducts.length > 0 ? (
                        filteredProducts.map((ele) => (
                            <div className='col-4 mb-3' key={ele.id}>
                                <Link to={`/productdetails/${ele.id}`} className="text-decoration-none">
                                    <div className='card'>
                                        <img src={ele.imgUrl} alt="" style={{ height: "350px" }} />
                                        <h4 className='card-title text-start'>{ele.productName} </h4>
                                        <p style={{ color: "#f0be2a", textAlign: "left" }}> <IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></p>
                                        <h6 className='card-text fw-bold fs-4 text-start'>${ele.price} </h6>
                                        <span className='text-end me-4' style={{ position: "relative", bottom: "50px", fontSize: "30px" }} onClick={notify} >
                                            <IoIosAddCircleOutline /><ToastContainer />
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        )) 
                    ) : (
                            <h1> Product Not Found !!</h1>
                    )
                    }  
                </div>
            </div>
            <Footer />
        </>
    ) 
}

export default Shoppage

