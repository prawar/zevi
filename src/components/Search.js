import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Search.css';
import Filter from './Filter';
import Navbar from './Navbar';
import Product from './Product';

const Search = () => {
    const [data, setData] = useState(null);
    let {product} = useParams();

    const filters = [
        {
            'title': 'BRAND',
            'items': ['Mango', 'H&M']
        },
        {
            'title': 'PRICE RANGE',
            'items': ['Under 500', '1000 To 3000']
        },
        {
            'title': 'RATINGS',
            'items': ['⭐ ⭐ ⭐ ⭐ ⭐', '⭐ ⭐ ⭐ ⭐', '⭐ ⭐ ⭐', '⭐ ⭐', '⭐']
        }
    ];

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/search?q=${product}`)
        .then(response=>{
            console.log(response.data.products);
            setData(response.data.products);
        })
    },[])
    return (
        <div className='products-page'>
            <Navbar />
            <h3 style={{fontSize: '40px',fontWeight: '400'}}>Search Results</h3>
            <div className='container'>
                <div className='left'>
                    {filters?.map(item=><Filter filter={item} />)}
                </div>
                <div className='right'>
                    {data?.map(item=><Product item={item} />)}
                </div>
            </div>
        </div>
    )
}

export default Search