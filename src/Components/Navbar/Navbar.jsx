import React from "react";
import { Outlet, Link } from "react-router-dom";
import ButtonPrimary from "../Button/ButtonPrimary";

const Navbar = () => {
  return (
    <div className="mx-auto w-[90%] max-w-screen-xl">
      <div className="py-5 flex justify-between">
        <h2>Logo</h2>
        <div className="flex text-normal items-center gap-9">
          <p className="cursor-pointer">About us</p>
          <p className="cursor-pointer">Services</p>
          <p className="cursor-pointer">Portfolio</p>
          <p className="cursor-pointer">Out Team</p>

          <ButtonPrimary text="Contact us"/>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Navbar;
