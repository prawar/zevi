import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/Model.css';

const Model = () => {
    const [trend, setTren] = useState(null);
    const [suggestion, setSuggestion] = useState(null);
    useEffect(() => {
        axios.get('https://dummyjson.com/products/category/womens-dresses')
            .then((response) => {
                setTren(response.data.products);
                console.log(response.data.products);
            });
        axios.get('https://dummyjson.com/products/categories')
        .then(response=>{
            console.log(response.data);
            setSuggestion(response.data.slice(0,4));
        });
    }, [])
    return (
        <div className='Model'>
            <div className='m-top'>
                <h3>Latest Trends</h3>
                <div className='item-list'>
                    {trend?.map(item =>
                        <div className='item'>
                            <img src={item.thumbnail} className='model-image' />
                            <p>{item.title}</p>
                        </div>)}
                </div>
            </div>
            <div className='m-bottom'>
                <h3 style={{marginBottom: '20px'}}>Popular Suggestion</h3>
                <div className='suggestion-list'>
                    {suggestion?.map(item =><p>{item}</p>)}
                </div>
            </div>
        </div>
    )
}

export default Model