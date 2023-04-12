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
    <div className='ferdigheter-container section__margin'id="aboutMe" >
        <div className='omMeg-feature' >
            <Feature   title="Om meg "  text="Hei! Jeg heter Selleban og er en 22 år gammel student og programmerer. Jeg er veldig interessert i å programmere og programmere ofte av egne grunner i fritden utenom studier. Andre Hobbier inkluderer trening, gaming og skating.   " />
        </div>
        <div className='ferdigheter-header'>
            <h1   className='header__text'>Utdanning og ferdigheter</h1>
        </div>
        <div className='ferdigheter-text'  >
            <Feature title= "UIO Bachelor grad PROSA" text="Student innenfor bachelor programmet programmering og systemarkitektur. " />
            <Feature title= "PLaceholder tekst/tittel" text="mer Placeholder tekst ikke ferdig. Mer placeholder tekst ikke ferdig." />
            <Feature title= "placholder tekst/tittel" text="PLaceholder tekst, ikke ferd. placeholder tekst ikke ferdig. Placeholder tekst ikke ferdig"/>
        </div>
    </div>

    );

}


export default Aboutme;