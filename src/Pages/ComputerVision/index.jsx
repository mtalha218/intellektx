import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import computerVision from "../../assets/computer-vision.jpg"
import ButtonPrimary from "../../Components/Button/ButtonPrimary";
const ComputerVision = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="w-[90%] mx-auto py-36 max-w-[1400px]">
        <div className="flex justify-center">
          <div className="w-[50%]">
            <p className="text-heading1">
              Computer Vision Services & Consultancy
            </p>

            <p className="text-large mt-12 leading-10">
              At IntelektX, we recognize the growing significance of Computer
              Vision in shaping the future of digital products. Committed to
              pioneering innovative solutions, we prioritize efficiency in
              development cycles without compromising on quality. Our approach
              involves fostering seamless collaboration among our dedicated
              teams of data scientists, developers, and operations
              professionals. By synergizing their efforts, we aim to streamline
              processes and unlock the full potential of Computer Vision,
              delivering deeper, more consistent, and exceptionally insightful
              outcomes.
            </p>
            <ButtonPrimary text="Lets Discuss Your Project" className="mt-12"/>
          </div>
          <div className="w-[50%] flex justify-end">
            <img className="w-[70%] rounded-[10px]" src={computerVision}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerVision;
