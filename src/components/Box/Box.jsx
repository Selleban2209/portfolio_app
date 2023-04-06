 

import {useEffect, useRef, useState, Component} from 'react'
import React from 'react'
import { languages } from "../../constants"
import "./Box.css"
import $ from 'jquery'

const  Cube = ()=> {

   
        useEffect(()=>{
            console.log('Loading TagCanvas...');
            const TagCanvas = window.TagCanvas;
            const options = {
                textFont: 'Manrope',
                textColour: "#FFFF",
                outlinMethod : "colour",
                outlineColour: "#BA330A",
                reverse: true,
                outlineIncrease: -10,
                depth: 0.5,
                maxSpeed: 0.05,
                weight: true,   
            };
            try{
                TagCanvas.Start('myCanvas', "myCanvasContainer", options)

            }catch (e){
                console.log("canvas error", e);

            }

        }, [])
        
       
            return (
                <div className='skill-sphere'>
                
                    <canvas width="500" height="500" id="myCanvas" className='myCanvas'>
                        </canvas>
                <div  className='canvas-container' id="myCanvasContainer">
                    <ul>
                    
                        {languages.map (language =>(
                            <li><a href=""> {language}</a> </li>
                            ))}
                    </ul>
                </div>
        </div>
          
          );
         
 }

 
 export default  Cube;
