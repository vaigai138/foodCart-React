
import './App.css'
import { Header } from './Components/Header'

import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Home } from './Components/Home'
import { Cart } from './Components/Cart'
import { createContext, useState } from 'react'



export const cartContext = createContext();

function App() {
  const [cart,setCart]=useState([]);
  

  return (
    <cartContext.Provider value={{cart,setCart}}>
      <BrowserRouter>
      <Header cart={cart}/>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
        
      </div>
      </BrowserRouter>
    </cartContext.Provider>
  )
}

export default App
