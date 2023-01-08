import React from 'react'

const Product = ({item}) => {
  return (
    <div>
        <img className='image' src={item.thumbnail} />
        <p>{item.title}</p>
        <p>{item.price}</p>
        <p>⭐⭐⭐⭐⭐</p>
    </div>
  )
}

export default Product