import React from 'react'
import './Feature.css'


const Feature =  ({title, text}) => (

    

    <div className='features-container'>
        <div className='features-container-title'>
            <div/>
            <h1>{title}</h1>
        </div>
        <div className='features-container-text'>
            <p>{text}</p>
        </div>
    </div>
        

);


export default Feature;