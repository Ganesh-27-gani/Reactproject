import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Reactslick from './Reactslick'
import Cards from './Cards'
import Discount from './Discount'
import Arrivals from './Arrivals'
import BestSales from './BestSales'

function App() {
  const [count, setCount] = useState(0)

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

export default App
