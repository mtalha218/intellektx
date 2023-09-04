import React from "react";
import ButtonPrimary from "../../Components/Button/ButtonPrimary";
import brain2 from "../../assets/brain2.webp";
const WhyUs = () => {
  return (
    <div className="w-[90%] mx-auto py-36">
      <div className="flex">
        <div className="w-[50%] flex justify-center items-center">
          <img src={brain2} className="w-[70%] " />
        </div>
        <div className="w-[50%] px-24">
          <p className="text-heading1 ">About Us</p>
          <p className="sub-text mt-6">
            At Intellektx, we're not just a technology company; we're your
            partners in innovation. With a passion for harnessing the power of
            artificial intelligence, we specialize in crafting cutting-edge
            solutions that transform your ideas into reality. Our team of
            dedicated experts is driven by a commitment to excellence in
            AI-based software web development, deep learning, machine learning,
            and data science. We don't just build software; we craft
            intelligent, intuitive experiences that elevate your business.
            Intellektx is where human creativity meets technological prowess,
            and together, we'll shape a future driven by innovation and
            intelligence. Join us on this extraordinary journey!
          </p>
          <ButtonPrimary className={"mt-10"} text={"More About Us"} />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
