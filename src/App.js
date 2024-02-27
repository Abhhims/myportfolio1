import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import "./App.css"
import { About } from './About/About'
import Project from './Projects/Project'
import Contact from './Contact/Contact'
import Starrating from './component/StarRating/Starrating'
// import { About } from './About/About'

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div div className='content_page' style={{display:"flex",alignItems:"center",justifyContent:"space-evenly",flexDirection:"column" }} >

      <Home></Home>
      <About></About>
      <Project></Project>
      <Contact></Contact>
      <Starrating></Starrating>
      </div>
    </>
  )
}

export default App