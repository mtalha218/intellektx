import React from "react";
import ButtonPrimary from "../../Components/Button/ButtonPrimary";
import brain2 from "../../assets/brain2.webp";
const WhyUs = () => {
  return (
    <div className="w-[90%] mx-auto py-36" id="aboutus">
      <div className="flex about-content">
        <div className="w-[50%] flex justify-center items-center">
          <img src={brain2} className="w-[100%] lg:max-w-[450px] md: max-w-[350px]" />
        </div>
        <div className="w-[50%] md:p-8 lg:p-12 xl:p-24 about-text">
          <p className="text-heading1 min-[320px]:mt-5 lg:mt-0">About Us</p>
          <p className="sub-text mt-6">
            At Intelektx, we're not just a technology company; we're your
            partners in innovation. With a passion for harnessing the power of
            artificial intelligence, we specialize in crafting cutting-edge
            solutions that transform your ideas into reality. Our team of
            dedicated experts is driven by a commitment to excellence in
            AI-based software web development, deep learning, machine learning,
            and data science. We don't just build software; we craft
            intelligent, intuitive experiences that elevate your business.
            Intelektx is where human creativity meets technological prowess,
            and together, we'll shape a future driven by innovation and
            intelligence. Join us on this extraordinary journey!
          </p>
          <div className="flex max-lg:justify-center mt-10">
          <ButtonPrimary text={"More About Us"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
