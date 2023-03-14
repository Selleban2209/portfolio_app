import React from 'react';
import './Navbar.css'
import {useState} from 'react'
import { whiteLinkedIn, githubImg, closedMenu } from '../../assets'
import {contacts } from '../../constants'
import { MdClose,MdMenu } from "react-icons/md";
//IoMdClose
const Menu = () =>(
    <>
    <p><a href="">Home</a></p>
    <p><a href="">About me</a></p>
    <p><a href="">Contact me </a></p>
    </>
)



const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return ( 

        <div className='header-navbar'>
            <nav className='header-navbar-div'>
                <div className='navbar-main-logo'>
                    <a className='header-logo'>PlaceholderLogo</a>
                </div>
                <div className='navbar-redirect-container'>
                    <Menu/>


                </div>

                            
            </nav>

            <div className='navbar-menu'>
                {toggleMenu
                ? <MdClose color="#fff" size={25} onClick={() => setToggleMenu(false)} />
                : <MdMenu color="#fff" size={25} onClick={() => setToggleMenu(true)} />
                }

                {toggleMenu && (
                    <div className='navbar-menu-container'>
                        <div className='navbar-menu-container-redirects'>
                        <Menu/>

                        </div>
                    </div>
                  )}

            </div>

        </div>

    )
}

export default Navbar