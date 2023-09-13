import React from "react";
import ButtonPrimary from "../../Components/Button/ButtonPrimary";
import vision from "../../assets/vision.png";
import deep from "../../assets/deep.png";
import machine from "../../assets/machine.png";
import data from "../../assets/data.png";
import web from "../../assets/web.png";
import ar from "../../assets/ar.png";

const Services = () => {
  return (
    <div className="w-[90%] mx-auto pt-12 pb-36" id="services">
      <div className="flex">
        <div className="w-[100%] px-8">
          <p className="text-heading1 w-fit mx-auto">Our Services</p>
          <div className="flex flex-wrap gap-10 justify-between mt-20">
          <div
          className="bg-[#1b0d38] flex justify-center items-center px-10 py-10 max-lg:w-[100%] w-[30%] max-w-[400px] min-h-[300px] mx-auto"
          style={{ boxShadow: " 0px 25px 20px -20px #361E5B45" }}
        >
          <div>
          <img src={vision} className="mx-auto w-[60px]" alt="services"/>
          <p className="text-center mt-5">Computer Vision</p>
          </div>
        </div>

        <div
          className="bg-[#1b0d38] flex justify-center items-center px-10 py-10 max-lg:w-[100%] w-[30%] max-w-[400px] min-h-[300px] mx-auto"
          style={{ boxShadow: " 0px 25px 20px -20px #361E5B45" }}
        >
          <div>
          <img src={deep} className="mx-auto w-[60px]" alt="services"/>
          <p className="text-center mt-5">Deep Learning</p>
          </div>
        </div>

        <div
          className="bg-[#1b0d38] flex justify-center items-center px-10 py-10 max-lg:w-[100%] w-[30%] max-w-[400px] min-h-[300px] mx-auto"
          style={{ boxShadow: " 0px 25px 20px -20px #361E5B45" }}
        >
          <div>
          <img src={machine} className="mx-auto w-[60px]" alt="services"/>
          <p className="text-center mt-5">Machine Learning</p>
          </div>
        </div>

        <div
          className="bg-[#1b0d38] flex justify-center items-center px-10 py-10 max-lg:w-[100%] w-[30%] max-w-[400px] min-h-[300px] mx-auto"
          style={{ boxShadow: " 0px 25px 20px -20px #361E5B45" }}
        >
          <div>
          <img src={data} className="mx-auto w-[60px]" alt="services"/>
          <p className="text-center mt-5">Data Analytics</p>
          </div>
        </div>

        <div
          className="bg-[#1b0d38] flex justify-center items-center px-10 py-10 max-lg:w-[100%] w-[30%] max-w-[400px] min-h-[300px] mx-auto"
          style={{ boxShadow: " 0px 25px 20px -20px #361E5B45" }}
        >
          <div>
          <img src={web} className="mx-auto w-[60px]" alt="services"/>
          <p className="text-center mt-5">Full Stack Development</p>
          </div>
        </div>

        <div
          className="bg-[#1b0d38] flex justify-center items-center px-10 py-10 max-lg:w-[100%] w-[30%] max-w-[400px] min-h-[300px] mx-auto"
          style={{ boxShadow: " 0px 25px 20px -20px #361E5B45" }}
        >
          <div>
          <img src={ar} className="mx-auto w-[60px]" alt="services"/>
          <p className="text-center mt-5">AR / VR</p>
          </div>
        </div>
          </div>
          <ButtonPrimary text={"Explore More"} className="mt-20 mx-auto" />
        </div>
       
      </div>
    </div>
  );
};

export default Services;
