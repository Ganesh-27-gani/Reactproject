import React from 'react'
import Navbar from './Navbar'
import Reactslick from './Reactslick'
import Cards from './Cards'
import Discount from './Discount'
import Arrivals from './Arrivals'
import BestSales from './BestSales'
import Footer from './Footer'

const TotalComp = () => {
  return (
    <> 
      <Navbar/>
       <Reactslick/>
       <Cards/>
       <Discount/>
       <Arrivals/>
       <BestSales/>
       <Footer/>
    </>
  )
}

export default TotalComp