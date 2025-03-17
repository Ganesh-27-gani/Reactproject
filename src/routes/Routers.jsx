import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TotalComp from '../TotalComp'
import ProductDitais from '../ProductDitais'
 

const Routers = () => {
  return (
   
      <Routes>
        <Route path='/' element={<TotalComp/>} /> 
        <Route path='/productdetails/:id' element={<ProductDitais />} /> 
      </Routes>   
        
   
  )
}

export default Routers