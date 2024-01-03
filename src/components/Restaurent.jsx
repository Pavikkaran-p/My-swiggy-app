import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCategory from './ItemCategory'
import useResDetails from '../utils/useResDetails'
import { Spinner } from '@material-tailwind/react'

const Restaurent = () => {
    const params=useParams()
    console.log(params.resId)
    const [details,category]=useResDetails(params.resId)

    
    if(Object.keys(details).length===0) return <div className='text-2xl text-center m-[50%]'><Spinner/></div>
  return (
    <>
        <div className='text-2xl p-5 px-15 m-4 rounded-3xl bg-gray-50 shadow-2xl'>
              <h2>{details.name}</h2>
              <h2>{details.cuisines.join(', ')}</h2>
              <h2>{details.areaName}</h2>
          {
            category.map(item=>{
              return <ItemCategory key={item.card.card.title} category={item}/>
            })
          }
          </div>
    </>


  )
}

export default Restaurent