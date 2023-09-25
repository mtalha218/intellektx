import React from 'react'
import Hero from './Hero'
import "./Home.css"
import AboutUs from './AboutUs'
import WhyUs from './WhyUs'
import Services from './Services'
import Testimonial from './Testimonial'
import ContactUs from './ContactUs'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <AboutUs/>
    <WhyUs/>
    <Services/>
    <Testimonial/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default Home