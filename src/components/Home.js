import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'
import Model from './Model';

const Home = () => {
  let inputRef = useRef(null);
  let navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleSearch = () => {
    let value = inputRef.current.value;
    console.log(value);
    if(value)
    navigate(`search/${value}`);
  }

  return (
    <div className='Home'>
      <div className='input'>
        <input 
          className='home-input'
          ref={inputRef}
          placeholder='Search'
          type='text'
          onKeyDown={e => {
            if(e.key === 'Enter')
            handleSearch();
          }}
          onFocus={()=>setShow(true)}
          onBlur={()=>setShow(false)}
          />
        <img src='/search.svg' className='search-icon' onClick={handleSearch} />
      </div>
      <img src='/ZEVI.svg' alt='logo' className='logo' />
      {show&&<Model/>}
    </div>
  )
}

export default Home;