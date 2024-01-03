import React from 'react'
import ItemList from './ItemList'

const ItemCategory = (props) => {
    const {category}=props
    console.log("Category --->")
    console.log(category)
  return (
    <>
        <div className='py-10 rounded-3xl my-5 bg-white'>
            <h1 className='px-10 font-semibold'>{category.card.card.title}</h1>
            {
              category.card.card.itemCards.map(i=>{
                return <ItemList item={i}/>
              })
            }
        </div>
    </>
  )
}

export default ItemCategory