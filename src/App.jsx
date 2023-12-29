import React, { useState,useEffect } from 'react'
import Header from './components/Header'
import ResContainer from './components/ResContainer'
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Restaurent from './components/Restaurent'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        path:"/",
        element:<ResContainer/>
      },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {
      path:"restaurent/:resId",
      element:<Restaurent/>
    }
  ]
}

  ])
  
const App = () => {
      
  return (
    <>
      
      <RouterProvider router={router}/>
      
      {/* <Routes>
        <Route path='/' Component={<Home/>}/>
        <Route path='/about' Component={<About/>}/>
        <Route path='/contact' Component={<Contact/>}/>
      </Routes> */}
    </>
  )
}

export default App