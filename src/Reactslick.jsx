import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from './Products';

const Reactslick = () => {
  var settings = {
    infinite: true,
   autoplay: true,
   autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
     <Slider {...settings} >
        {
          SliderData.map((x)=>(
            <div className='container mb-5 mt-5' key={x.id}> 
              <div className='row' >
              <div className='col-7 text-center' style={{textAlign:"center"}}>
                 <h2 style={{textAlign:"left", marginTop:"180px",fontSize:"40px",marginBottom:"15px"}} >{x.title}</h2> 
                 <h6 style={{textAlign:"left",marginBottom:"15px"}}>{x.desc}</h6>
                 <button style={{textAlign:"left",marginRight:"82%"}}>Visit Collections</button>
              </div>
              <div className='col-5'>
                  <img className='rounded float-end pt-3 'style={{width:"500px", height:"500px", }} src={x.cover} alt="" />
              </div>
            </div>
            </div>
          ))
        }
     </Slider>
    </>
  )
}

export default Reactslick