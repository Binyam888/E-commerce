import React from 'react'
import './Hero.css';
import hand_icon from "../assets/hand_icon.png"
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div className="hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" />
            </div>
            
            <p>collections</p>
                <p>for everyone</p>
           
               
         <div className="latest-btn">
           <a href="#newCollection"> Latest collections</a>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
      
        <div className="hero-right">
            <img src={hero_image} alt="" />

        </div>
    </div>
  )
}

export default Hero