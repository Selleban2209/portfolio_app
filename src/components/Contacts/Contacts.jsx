import React from 'react'; 
import './Contacts.css'
import {contacts } from '../../constants'
const Contacts = () => {


    return (
        <div className='contacts-container section__margin header__text'> 
            <div className='contacts-header '>
                <h1>Contact Me</h1>

            </div>
           <div>
            <ul className='contacts-list-container' >

                {contacts.map((nav, index) => (
                
                    
                    <li >


     <a href={`${nav.link}`} ><img  src = {nav.img} alt= "tittelbilde" style ={index===contacts.length -1? {width: '50px', height:'50px', gap:'100px'}: null}/> <p className="a__text">{nav.title}</p>
        </a>
                    </li>
                
                ))}



            
            </ul>
            </div> 




        </div>
);

}

export default Contacts;