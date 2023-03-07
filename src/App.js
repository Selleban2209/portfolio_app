import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Header, Navbar, Box, Sphere, Aboutme, Contacts} from './components/export'
import './index.css';


const App = () =>  {
  return (
    <div className="App">
      <div className='header-gradient'>


      <Navbar/> 
    <div className='test-align'>
      <Header/>
      <Sphere/>     

    </div>
    </div>
      <Aboutme/>
      <Contacts/>

    </div>
  );
}

export default App;
