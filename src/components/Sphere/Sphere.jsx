
import {useEffect, useRef, useState, Component} from 'react'
import React from 'react'
import { languages } from "../../constants"
import "./Sphere.css"
import TagCloud from "TagCloud"
import $ from "jquery"

const  Spherebox = () => {
    
    
    const TagCloud = require('TagCloud');
    useEffect(() =>{
        return () => {
            const container = ".tagcloud";
            const options = {
                radius:300, 
                maxSpeed: "fast", 
                direction: 75,
                keep: false,
            };
            
            const x =  TagCloud(container, languages, options);
            
        };
    }, []);
    
    /*componentDidMount=() =>{}*/
    return (
        <div className="text-sphere">
            {}
            <span className="tagcloud"   
            ></span>
        </div>
        
      
        );
    }
    
    
    export default Spherebox;