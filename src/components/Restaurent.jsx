import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemCategory from './ItemCategory'

const Restaurent = () => {
    const {resId}=useParams()
    const [details,setDetails]=useState("")
    const [category,setCategory]=useState("")
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        (async()=>{
            const data=await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=331001')
          const json=await data.json()
          console.log(json)
          const details = json.data.cards[0].card.card.info
          setDetails(details)
          const categories = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards
          const filteredCategories=categories.filter(item=> item.card.card["@type"]==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
          setCategory(filteredCategories)
          // console.log(filteredCategories)
          // console.log(filteredCategories[0].card.card.itemCards[0].card.info.name)
          setIsLoading(false)
          })()
    }, [])

    
    if(Object.keys(details).length===0) return <div>Loading...</div>
  return (
    <>
      {
        isLoading? <div><h1>Loading</h1></div>:(
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
      
    </>


  )
}

export default Restaurent