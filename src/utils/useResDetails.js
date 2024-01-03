import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const useResDetails = (id) => {
    const [details,setDetails]=useState("")
    const [category,setCategory]=useState("")
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        (async()=>{
            const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=`+id)
            // console.log(params.resId)
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


  return [details,category]
}

export default useResDetails