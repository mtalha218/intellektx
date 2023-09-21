import React from 'react'
import heroImg from "../../assets/hero-img.png"
import ButtonPrimary from '../../Components/Button/ButtonPrimary'

import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar'
const Hero = () => {
  return (
    <div className='hero-container  '>
      <Navbar />
      <div className=' mt-20 text-center max-w-[80%] mx-auto'>
        <p className='hero-text-color'>
          Empowering your business with
        </p>
        <p className='hero-text'>AI technology</p>
        <p className='sub-text mt-4'>Innovative, AI-driven solutions for businesses, transforming data into actionable insights, and driving growth. </p>
        <ButtonPrimary text="What we do?" href="#services" className="mt-8 mx-auto" />
      </div>
      <img src={heroImg} className='w-[100%]mt-10 opacity-90' />
    </div>
  )
}

export default Hero