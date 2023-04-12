import React from 'react';
import './Header.css'
import {useState} from 'react'



const Header  = () => {


/*Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book 
<button type='button'>Learn more</button>*/

    return (
        <div className='header-section section__padding' id='home'>
            <div className='header-content-text'>
                <h1 className='gradient_text'>Welcome to <br/>my personal portfolio!  </h1>
                <p>Jeg er en programmerer og studnet innenfor programmering og system arkitektur. Denne nettsiden skal virke som en porftølje men også som et god smakebit på mine evner.
                    Alt du ser på denne nettsiden er programmert og designet av meg!   
                 </p>
            <div className='header-content-button'>
            </div>
            </div>
            
        </div>

    )
}


export default Header