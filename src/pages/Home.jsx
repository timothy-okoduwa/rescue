import React from 'react'
import Typewriter from "typewriter-effect";

import Fade from 'react-reveal/Fade';
const Home = () => {
  return (
    <div>
        <div className='bg'>
<div className="container">
    <div className="row">
        <div className=" col col-12 col-lg-6 ">
            <div className='left'>
            <Fade left>
                <div className='head'>
         
                <Typewriter
    options={{
        
        loop: true,
      }}
  onInit={(typewriter)=> {

      
      
  typewriter

  .typeString("Where <b>God's Word</b> ")
    
  .pauseFor(1000)
  .deleteAll()
  .typeString("Where the <b>bible</b> ")

  .pauseFor(1000)
  .deleteAll()
  .typeString("Where the <b>HolyGhost</b> ")
  .start();
  }}
  />
                    is Teached.
                </div>
                </Fade>
                <div className='rais'> 
                    Raising Desciples, Perfecting The  Saints 
                </div>
            </div>
        </div>
        <div className=" col col-12 col-lg-6 d-flex justify-content-center">11</div>
    </div>
</div>
        </div>
    </div>
  )
}

export default Home