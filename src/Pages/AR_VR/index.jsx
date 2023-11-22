import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ar from "../../assets/ar.jpg";
import ButtonPrimary from "../../Components/Button/ButtonPrimary";
const AR_VR = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="w-[90%] mx-auto py-36 max-w-[1400px]">
        <div className="flex justify-center">
          <div className="w-[50%]">
            <p className="text-heading1">
              AR / VR Services & Consultancy
            </p>

            <p className="text-large mt-12 leading-10">
              At IntelektX, we're fully attuned to the growing impact of
              Augmented Reality (AR) and Virtual Reality (VR) in the evolution
              of digital products. Committed to innovative solutions, we
              prioritize efficient development cycles while upholding quality
              standards. Our data scientists, developers, and operations teams
              collaborate seamlessly to streamline processes, ensuring AR/VR
              deliver deeper, consistent, and insightful user experiences. At
              IntelektX, we're dedicated to harnessing the transformative
              potential of AR/VR, providing our clients with pioneering
              solutions that redefine digital interaction.
            </p>
            <ButtonPrimary text="Lets Discuss Your Project" className="mt-12" />
          </div>
          <div className="w-[50%] flex justify-end">
            <img className="w-[70%] rounded-[10px]" src={ar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AR_VR;
