import React from 'react';
import logo from "../../assets/intelektx_logo.png"

const Footer = () => {
  return (
    <footer className="footer-shadow text-white py-10 px-[20%] mx-auto">
      <div className="container flex justify-between">
        
        
        <div className='flex gap-32'>
        <nav>
            <p className='mb-5'>Links</p>
          <ul className="">
            <li className='mb-2'><a className='text-xs opacity-60 ' href="/">Home</a></li>
            <li className='mb-2'><a className='text-xs opacity-60' href="/services">Services</a></li>
            <li className='mb-2'><a className='text-xs opacity-60' href="/about">About</a></li>
            <li className='mb-2'><a className='text-xs opacity-60' href="/contact">Contact</a></li>
          </ul>
        </nav>

        <nav>
            <p className='mb-5'>Community</p>
          <ul className="">
            <li className='mb-2'><a className='text-xs opacity-60 ' href="/">Upwork</a></li>
            <li className='mb-2'><a className='text-xs opacity-60' href="/services">LinkedIn</a></li>
            <li className='mb-2'><a className='text-xs opacity-60' href="/about">Instagram</a></li>
            <li className='mb-2'><a className='text-xs opacity-60' href="/contact">Twitter</a></li>
          </ul>
        </nav>
        </div>

        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="w-[150px]" />
        </div>
      </div>
      
      <div className="text-center mt-4 text-xs">
        <p>&copy; {new Date().getFullYear()} Intelektx. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
