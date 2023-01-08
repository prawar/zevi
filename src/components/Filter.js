import React from 'react'
import '../styles/Filter.css'

const Filter = ({ filter }) => {
    return (
        <div className='filter'>
            <div className='filter-top'>
                <p>{filter.title}</p>
                <img src='arrow.svg' />
            </div>
            <div className='filter-list'>
                {filter.items.map(item =>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignContent: 'center'
                    }}>
                        <input type="checkbox" className='filter-list-item' name="vehicle1" value="Mango" />
                        <label for="vehicle1">{item}</label>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Filter