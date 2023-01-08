import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='search-around'>
                <input
                    placeholder='Search'
                    type='text'
                    className='search-input'
                />
                <img src='/search.svg' className='search-icon' />
            </div>
            <img src='/ZEVI.svg' alt='logo' className='search-logo' />
        </div>
    )
}

export default Navbar