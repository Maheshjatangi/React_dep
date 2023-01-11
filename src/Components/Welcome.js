import React from 'react'
import '../Components/Welcome.css'
import { FaHeart } from "react-icons/fa";
function welcome() {
  return (
    <div>
      <h1 className='friends'>Welcome Friends</h1>
      <p className='happy'>psst: We're happy you're here!</p>
        <div className='welcomemain'>
          <div className='welcomesub-1'>
          <div className='welcome-1'></div>
          <div className='welcome-2'> <img src={require('../Components/images/11.jpg')} />
          </div>
          <div className='welcome-3'></div>
          </div>
          <div className='welcomesub-2'>
             <h2 className='weare'>We are pick up Limes</h2>
             <p className='mission'>Our mission is to make a nourishing plant-based lifestyle accessible to everyone.</p>
             <p className='mission'>We make videos, recipes, and nutrition articles to make you feel excited and supported in introducing more plant-based foods into your meals, snacks, desserts, and everything in-between!</p>
             <button className='learnmore'>Learn More < FaHeart  className='heart'/></button>
          </div>
            
        </div>
    </div>
  )
}

export default welcome