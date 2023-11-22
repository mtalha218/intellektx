import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import web from "../../assets/web.jpg"
import ButtonPrimary from "../../Components/Button/ButtonPrimary";
const FullStack = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="w-[90%] mx-auto py-36 max-w-[1400px]">
        <div className="flex justify-center">
          <div className="w-[50%]">
            <p className="text-heading1">
              FullStack Development Services & Consultancy
            </p>

            <p className="text-large mt-12 leading-10">
            At IntelektX, we recognize the paramount importance of Full Stack Web Development in shaping the landscape of digital products. Committed to driving innovation, we prioritize efficient development cycles without compromising on quality. Our full stack developers, proficient in both front-end and back-end technologies, work in synergy to streamline processes, ensuring comprehensive web solutions that deliver seamless, user-centric experiences. At IntelektX, we're dedicated to harnessing the full spectrum of web development expertise to create versatile, dynamic, and cutting-edge digital experiences for our clients, ensuring they stay ahead in the ever-evolving digital landscape.
            </p>
            <ButtonPrimary text="Lets Discuss Your Project" className="mt-12"/>
          </div>
          <div className="w-[50%] flex justify-end">
            <img className="w-[70%] rounded-[10px] h-min" src={web}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStack;
