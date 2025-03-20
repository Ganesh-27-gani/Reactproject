import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TotalComp from '../TotalComp'
import ProductDitais from '../ProductDitais'
import Shoppage from '../Shoppage'
import CortPage from '../CortPage'
 

const Routers = () => {
  return (
   
      <Routes>
        <Route path='/' element={<TotalComp/>} /> 
        <Route path='/productdetails/:id' element={<ProductDitais />} /> 
        <Route path='/shoppage' element={<Shoppage/>} /> 
        <Route path='/Cartpage' element={<CortPage/>} /> 
      </Routes>   
        
   
  )
}

export default Routers