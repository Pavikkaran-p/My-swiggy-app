import React from 'react'

const ItemList = ({item}) => {
    // const {item}=props
    console.log(item)
  return (
    <>
        <div className='px-8 py-2 bg-gray-100 m-6 rounded-2xl'>
        <h2 >{item.card.info.name}</h2>
        <h2 className='flex'>{item.card.info.price}</h2>
        <h2 className=''>{item.card.info.ratings.aggregatedRating.rating} ⭐</h2>
        
        </div>
    </>
  )
}

export default ItemList