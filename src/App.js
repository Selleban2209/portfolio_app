import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Header, Navbar, Cube, Sphere, Aboutme, Contacts} from './components/export'
import './index.css';


const App = () =>  {
  return (
    <div className="App">
      <div className='header-gradient'>
      <Navbar/> 
    <div className='header-align'>
      <Header/>
      <Cube/>   
    </div>
    </div>
      <Aboutme/>
      <Contacts/>
    </div>
  );
}

export default App;
