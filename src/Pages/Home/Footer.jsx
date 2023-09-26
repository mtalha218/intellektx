import React from "react";
import logo from "../../assets/intelektx_logo.png";

const Footer = () => {
  return (
    <footer className="footer-shadow text-white py-10 px-[10%] mx-auto max-md:px-0 max-md:w-[90%]">
      <div className="container flex gap-52 max-md:gap-16 max-md:gap-16 max-sm:gap-4 justify-center w-[100%]">
          <nav>
            <p className="mb-5">Links</p>
            <ul className="">
              <li className="mb-2">
                <a className="text-xs opacity-60 " href="/">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a className="text-xs opacity-60" href="#services">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a className="text-xs opacity-60" href="#aboutus">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a className="text-xs opacity-60" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <nav>
            <p className="mb-5">Solutions</p>
            <ul className="">
              <li className="mb-2">
                <a className="text-xs opacity-60 " href="/">
                  Computer Vision
                </a>
              </li>
              <li className="mb-2">
                <a className="text-xs opacity-60" >
                  Machine Learning
                </a>
              </li>
              <li className="mb-2">
                <a className="text-xs opacity-60" >
                  Deep Learning
                </a>
              </li>
              <li className="mb-2">
                <a className="text-xs opacity-60">
                  Data Analytics
                </a>
              </li>
              <li className="mb-2">
                <a className="text-xs opacity-60" >
                  Full Stack Development
                </a>
              </li>
              <li className="mb-2">
                <a className="text-xs opacity-60">
                  AR / VR
                </a>
              </li>
            </ul>
          </nav>

          <nav>
            <p className="mb-5">Community</p>
            <ul className="">
              <li className="mb-2">
                <a className="text-xs opacity-60 " href="/">
                  Upwork
                </a>
              </li>
              <li className="mb-2">
                <a className="text-xs opacity-60" >
                  LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a className="text-xs opacity-60" >
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a className="text-xs opacity-60" >
                  Twitter
                </a>
              </li>
            </ul>
          </nav>
      </div>

      <div className="text-center mt-12 text-xs">
        <p>&copy; {new Date().getFullYear()} Intelektx. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
