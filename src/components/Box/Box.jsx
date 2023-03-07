 
 import { Canvas , useFrame } from "@react-three/fiber"
 import {useEffect, useRef, useState} from 'react'
 import React from 'react'
 import * as pc from "https://cdn.skypack.dev/playcanvas"
 import * as THREE from 'three'
import {Mesh} from  "three"
import "./Box.css"

function  Cube () {
    //const canvasRef  = useRef<HTMLCanvasElement | null >(null);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    const geometry = new THREE.BoxGeometry(2  , 2, 2);
    const material = new THREE.MeshStandardMaterial( { color: 0xffff00 } );
    const boxRef = new THREE.Mesh( geometry, material );
    
    useFrame( (state, delta)=> {
        if(!boxRef.current){
            return;
        }
        boxRef.current.rotation.x += 0.0005;
        boxRef.current.rotation.y += 0.001;
        boxRef.scale.x = 1000;

        });
    
    
    return (
       
            <mesh ref={boxRef} 
            scale={active ? 2 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}

            
            >
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
            </mesh>
            );
 }

 
 export default function Box (){
    return ( 
    
    <div className="canvas-box section__padding">
    <Canvas className="test">
        
        <ambientLight/>
        <pointLight position= {[5,5,5]}/>
        
        <Cube position={[-1.2, 1 , -1]}/>
    </Canvas>
    </div>
    
    )

 };
 /*
     //SCENE 
     const scene = new THREE.Scene();
 
     const camera = new THREE.PerspectiveCamera(75, 1000/25,0.1, 1000 );
     //Render
     const renderer  = new THREE.WebGLRenderer();
 
     const boxGeometry = new THREE.BoxGeometry(1,1,1);
 
 
     const material = new THREE.MeshBasicMaterial({
         color: "red",
     });
     const box = new THREE.Mesh(boxGeometry, material);
     scene.add(box);
 
     renderer.setSize(width, height);
     renderer.setPixelRatio(window.devicePixelRatio);
     document.body.appendChild(renderer.domElement); 
     
 
     renderer.render(scene , camera);
     
     //GEOMETRI
 
 
 
     //METRIALE
         */