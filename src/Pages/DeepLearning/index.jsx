import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import deep from "../../assets/deep.jpg";
import ButtonPrimary from "../../Components/Button/ButtonPrimary";
const DeepLearning = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="w-[90%] mx-auto py-36 max-w-[1400px]">
        <div className="flex justify-center">
          <div className="w-[50%]">
            <p className="text-heading1">
              Deep Learning Services & Consultancy
            </p>

            <p className="text-large mt-12 leading-10">
              At IntelektX, we are acutely aware of the increasingly vital role
              that Deep Learning plays in the evolution of digital products.
              Committed to driving innovation, we prioritize efficient
              development cycles without compromising on quality. Our data
              scientists, developers, and operations teams collaborate
              seamlessly to streamline processes, ensuring Deep Learning
              solutions that deliver deeper, consistent, and insightful
              outcomes. At IntelektX, we're dedicated to harnessing the power of
              Deep Learning to redefine digital experiences, keeping our clients
              at the forefront of technological advancements.
            </p>
            <ButtonPrimary text="Lets Discuss Your Project" className="mt-12" />
          </div>
          <div className="w-[50%] flex justify-end">
            <img className="w-[70%] rounded-[10px] h-min" src={deep} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepLearning;
