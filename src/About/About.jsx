import React from 'react'
import "./About.css"
import aboutimg from "../images/about.png"
export const About = () => {
  return (
    <>
      <div className="aboutmain">
      
        <div className="aboutcontainer" style={{width:'90%'}}>
          <div className="aboutimage" style={{width:'50%',display:'flex',alignItems:'flex-start',justifyContent:"center"}}>
            <img src={aboutimg} className='aboutimg' alt="person setting image" />
          </div>
          <div className="abouttext" style={{width:'50%',display:'flex',alignItems:'flex-start',justifyContent:"center"}}>
            <div className="abouttexteadder">
              <span className="aboutheadder">About Me</span>
              <p className="address">A dedicated Full-Stack Developer based in Benglore </p>
            </div>
            <div className="aboutdetails">
              <p className="abouttextsetails">
              As a Junior Full-Stack Developer,
               I possess an impressive arsenal 
               of skills in HTML, CSS, JavaScript,
                React, Java, SQL, ExpressJS(Basics) , NodeJS,
                 Spring and Spring Boot(Basics), mangoBD and MUI  . I'm excellent
                 in designing and maintaining responsive 
                 websites that offer a smooth user experience. 
                 My expertise lies in crafting dynamic,
                  engaging interfaces through writing clean
                   and optimized code and utilizing cutting-edge 
                   development tools and techniques. I am also a
                    team player who thrives in collaborating with 
                    cross-functional teams to produce outstanding web applications.
              
              </p>
            </div>

          </div>
        </div>
        {/* <div className="rotatediv">jhdhadhd</div> */}
        </div></>)
}
