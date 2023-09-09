import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ButtonPrimary from "../Button/ButtonPrimary";
import menu from "../../assets/menu.png";
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
      <div className="py-5 flex justify-between">
        <h2>Logo</h2>
        {windowWidth > 768 ? (
          <div className="flex text-normal items-center gap-9">
            <p className="cursor-pointer">About us</p>
            <p className="cursor-pointer">Services</p>
            <p className="cursor-pointer">Portfolio</p>
            <p className="cursor-pointer">Our Team</p>

            <ButtonPrimary text="Contact us" />
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
            <p className="cursor-pointer">About us</p>
            <p className="cursor-pointer">Services</p>
            <p className="cursor-pointer">Portfolio</p>
            <p className="cursor-pointer">Our Team</p>

            <ButtonPrimary text="Contact us" />
          </div>
        )}
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
