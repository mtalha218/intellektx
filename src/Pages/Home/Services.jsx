import React from "react";
import ButtonPrimary from "../../Components/Button/ButtonPrimary";
import network from "../../assets/network.svg";

const Services = () => {
  return (
    <div className="w-[90%] mx-auto pt-12 pb-36">
      <div className="flex">
        <div className="w-[60%] px-8">
          <p className="text-heading1 ">Our Services</p>
          <p className="sub-text mt-6">
            Intellektx offers a diverse range of innovative solutions, driven by
            cutting-edge technology and unparalleled expertise, tailored to meet
            your unique needs and objectives. Explore our offerings today
          </p>
          <div>
            <div className="flex items-center mt-12">
              <p className="w-[400px]">Computer Vision</p>
              <p className="sub-text w-fit">
                Empowering machines with the ability to interpret the visual
                world, with advanced image analysis
              </p>
            </div>

            <div className="flex items-center mt-8">
              <p className="w-[400px]">Deep Learning</p>
              <p className="sub-text w-fit">
                Harnessing neural networks to enable machines to learn and make
                complex decisions, in AI and automation
              </p>
            </div>

            <div className="flex items-center mt-8">
              <p className="w-[400px]">Machine Learning</p>
              <p className="sub-text w-fit">
                Machines to learn from data, enabling predictive insights and
                intelligent automation for diverse applications
              </p>
            </div>

            <div className="flex items-center mt-8">
              <p className="w-[400px]">Data Analytics</p>
              <p className="sub-text w-fit">
                Extracting actionable insights from data to inform strategic
                decisions and drive business growth
              </p>
            </div>

            <div className="flex items-center mt-8">
              <p className="w-[400px]">Full Stack Development</p>
              <p className="sub-text w-fit">
                Crafting complete digital solutions, ensuring smooth user
                experiences and powerful functionality
              </p>
            </div>
          </div>
          <ButtonPrimary text={"Learn More"} className="mt-10" />
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <img src={network} className="w-[70%] " />
        </div>
      </div>
    </div>
  );
};

export default Services;
