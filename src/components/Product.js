import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { color } from '@mui/system';
import React, { useState } from 'react'
import '../styles/Product.css'

const Product = ({ item }) => {
  const [wish, setWish] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div className='product'>
      {!wish
        ?
        <FavoriteBorder
          style={{
            position: 'absolute',
            right: '0px',
            cursor: 'pointer'
          }}
          onClick={() => setWish((wish) => !wish)} />
        :
        <Favorite
        style={{
          position: 'absolute',
          right: '0px',
          cursor: 'pointer',
          color: 'red'
        }}
        onClick={() => setWish((wish) => !wish)} />}
      <img 
      className='image' 
      src={item.thumbnail} 
      onMouseEnter={()=>setShow(true)}
      onMouseLeave={()=>setShow(false)}/>
      {show&&<div className='hover-element'>
        <p>View Product</p>
      </div>}
      <p>{item.title}</p>
      <p>{item.price}</p>
      <p>⭐⭐⭐⭐⭐</p>
    </div>
  )
}

export default Product