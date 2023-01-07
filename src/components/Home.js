import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className='input'>
        <input placeholder='Search' type='text'/>
        <img src='/search.svg' className='search-icon' />
      </div>
      <img src='/ZEVI.svg' alt='logo' className='logo' />
    </div>
  )
}

export default Home