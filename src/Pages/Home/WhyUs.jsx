import React from "react";
import brain from "../../assets/brain.png";
import cost from "../../assets/cost.png";
import fast from "../../assets/fast.png";
const WhyUs = () => {
  return (
    <div className="w-[90%] mx-auto pt-12 pb-36">
      <p className="text-heading1 text-center">Why Choose Intelektx</p>
      <div className="mt-16 flex justify-between why-us-section max-lg:flex-col max-lg:items-center max-lg:gap-10">
        <div
          className="bg-[#ffffff10] px-10 py-10 max-lg:w-[100%]  w-[30%] max-w-[400px]"
          style={{ boxShadow: " 0px 25px 20px -20px #361E5B45" }}
        >
          <img className="mx-auto" src={brain} />
          <p className="text-center mt-5">High Quality Standards</p>
          <p className="sub-text text-center mt-5">
          At Intelektx, we uphold unwavering standards of excellence in AI, web development, deep learning, machine learning, and data science, delivering top-notch solutions
          </p>
        </div>

        <div
          className="bg-[#ffffff10] px-10 py-10 max-lg:w-[100%] w-[30%] max-w-[400px]"
          style={{ boxShadow: " 0px 25px 20px -20px #361E5B45" }}
        >
          <img className="mx-auto" src={cost} />
          <p className="text-center mt-5">Cost Effective Solutions</p>
          <p className="sub-text text-center mt-5">
          We offer affordable, high-value solutions that deliver exceptional quality and value, helping you achieve your objectives within budget constraints
          </p>
        </div>

        <div
          className="bg-[#ffffff10] px-10 py-10 max-lg:w-[100%] w-[30%] max-w-[400px]"
          style={{ boxShadow: "0px 25px 20px -20px #361E5B45" }}
        >
          <img className="mx-auto" src={fast} />
          <p className="text-center mt-5">Fast Service</p>
          <p className="sub-text text-center mt-5">
          We are dedicated to providing rapid, efficient solutions tailored to your specific needs, ensuring you achieve your goals quickly and effectively
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
