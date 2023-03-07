import React from 'react'
import './Aboutme.css'
import {Feature } from "../export"
import { useEffect, useState } from 'react';

const Aboutme  = () => {
  const [mousePos, setMousePos] = useState({});
  const root = document.documentElement;
  useEffect(() => {
      const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX-event.target.offsetLeft, y: event.clientY-event.target.offsetTop });
      };
      // document.documentElement.style.setProperty('--mouse-y', mousePos.y  ); 
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener(
          'mousemove',
          handleMouseMove
          );
        };
      }, []);
      
      root.style.setProperty('--mouse-y', `${mousePos.y}px` ); 
      root.style.setProperty('--mouse-x', `${mousePos.x}px` ); 
     // console.log(mousePos.y);
    
    return    (
    <div className='ferdigheter-container section__margin'>
        <div className='omMeg-feature'>
            <Feature title="Om Meg LET GOOOO"  text="it falls apart jad ajda blame!" />

        </div>
        <div className='ferdigheter-header'>
            <h1 className='header__text'>Utdanning og ferdigheter  </h1>


         

        </div>
        <div className='ferdigheter-text'>
            <Feature title= "UIO foslo" text="Jeg har ikke noe å si men jeg må lage masste tekst slik at det har plass " />
            <Feature title= "UIO oslo" text="mer text som jeg trenger for å vise css ferdig da igjen" />
            <Feature title= "UIO oslo" text="bacon ham thaats all they servin stomach hurtin but i aint nervous"/>
          
        </div>



    </div>

    );


}


export default Aboutme;