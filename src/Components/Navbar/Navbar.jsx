import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ButtonPrimary from "../Button/ButtonPrimary";
import menu from "../../assets/menu.png";
import logo from "../../assets/intelektx_logo.png"
import "./Navbar.css"
const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add a resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="mx-auto w-[90%] max-w-screen-xl">
      <div className="py-8 flex justify-between">
        <img src={logo} style={{width:"200px", height:"auto"}}/>
        {windowWidth > 768 ? (
          <div className="flex text-normal items-center gap-9">
            <a className="cursor-pointer" href="/#aboutus">About us</a>
            <a className="cursor-pointer" href="/#services">Services</a>
            {/* <a className="cursor-pointer">Portfolio</a> */}

            <ButtonPrimary href="#contact" text="Contact us" />
          </div>
        ) : (
          <img
            src={menu}
            alt="menu"
            className="w-[25px] z-10"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
        {menuOpen && windowWidth <= 768 && (
          <div className="mob-menu bg-[#1B1629] flex flex-col text-normal items-center gap-9 pt-20 pb-8">
            <a className="cursor-pointer" href="/#aboutus">About us</a>
            <a className="cursor-pointer" href="/#services">Services</a>

            <ButtonPrimary href="#contact" text="Contact us" />
          </div>
        )}
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
