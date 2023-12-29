import React from 'react'
import Header from '../components/Header'
import ResContainer from '../components/ResContainer'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default Home