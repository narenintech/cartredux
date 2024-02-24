import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts, fetchFromAPI } from './productSlice'
import Cart from './Cart'
import Products from './Products'
import ProductDetail from './productdetail'
import Home from './Home'
import Header from './Header'
import {Routes, Route } from 'react-router-dom'

function App() {
  const cart = useSelector((state)=>state.items.cart);
  //console.log(cart);

  const dispatch = useDispatch()


  useEffect(()=>{
      dispatch(fetchFromAPI());
  },[])
  return (
    <>
    <Header />
      <Routes>       
          <Route path='/' element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        
      </Routes>
    

    </>
  )
}

export default App
