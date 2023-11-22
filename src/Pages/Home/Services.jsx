import React from "react";
import ButtonPrimary from "../../Components/Button/ButtonPrimary";
import vision from "../../assets/vision.png";
import deep from "../../assets/deep.png";
import machine from "../../assets/machine.png";
import data from "../../assets/data.png";
import web from "../../assets/web.png";
import ar from "../../assets/ar.png";
import { useNavigate } from "react-router-dom";

const Services = () => {

  const navigate = useNavigate()
  return (
    <div className="w-[90%] mx-auto pt-12 pb-36 max-w-[1400px]" id="services">
      <div className="flex">
        <div className="w-[100%]">
          <p className="text-heading1 w-fit mx-auto">Our Services</p>
          <div className="flex flex-wrap gap-10 justify-between mt-20">
            {/* __________________________________________________________________________________________ */}

            <div className="flip-card  max-lg:w-[100%] w-[30%] min-h-[300px] mx-auto cursor-pointer" onClick={()=>navigate("/services/computer-vision")}>
              <div className="flip-card-inner bg-[#1b0d38] w-[100%] ">
                <div className="flip-card-front flex flex-col justify-center items-center">
                  <img
                    src={vision}
                    className="mx-auto w-[60px]"
                    alt="services"
                  />
                  <p className="text-center mt-5">Computer Vision</p>
                </div>
                <div className="flip-card-back flex justify-center items-center text-center p-4">
                  <p style={{color:"#090315"}}>Image Recognition, Object Detection, Facial Analysis, Gesture Recognition, Semantic Segmentation, Feature Extraction, Pose Estimation, Scene Understanding, Video Tracking, Depth Estimation, Image Registration, Medical Imaging, Emotion Analysis, Activity Recognition</p>
                </div>
              </div>
            </div>

            {/* __________________________________________________________________________________________ */}

            <div className="flip-card  max-lg:w-[100%] w-[30%] min-h-[300px] mx-auto cursor-pointer" onClick={()=>navigate("/services/deep-learning")}>
              <div className="flip-card-inner bg-[#1b0d38] w-[100%] ">
                <div className="flip-card-front flex flex-col justify-center items-center">
                  <img
                    src={deep}
                    className="mx-auto w-[60px]"
                    alt="services"
                  />
                  <p className="text-center mt-5">Deep Learning</p>
                </div>
                <div className="flip-card-back flex justify-center items-center text-center p-4">
                  <p style={{color:"#090315"}}>Neural Networks, Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), Natural Language Processing (NLP), Speech Recognition, Deep Reinforcement Learning, Deep Learning in Healthcare, Deep Learning for Recommender Systems.</p>
                </div>
              </div>
            </div>

            {/* __________________________________________________________________________________________ */}

            <div className="flip-card  max-lg:w-[100%] w-[30%] min-h-[300px] mx-auto cursor-pointer" onClick={()=>navigate("/services/machine-learning")}>
              <div className="flip-card-inner bg-[#1b0d38] w-[100%] ">
                <div className="flip-card-front flex flex-col justify-center items-center">
                  <img
                    src={machine}
                    className="mx-auto w-[60px]"
                    alt="services"
                  />
                  <p className="text-center mt-5">Machine Learning</p>
                </div>
                <div className="flip-card-back flex justify-center items-center text-center p-4">
                  <p style={{color:"#090315"}}>Computer Vision, Generative AI, 2D/3D Object Detection, Segmentation, Data Labeling, Data Augmentation, Pose Estimation, Reinforcement Learning, Edge AI, Hardware Acceleration, Deployment, Machine Learning, Statistical Modeling, Classification, Time Series Analysis, Event Monitoring</p>
                </div>
              </div>
            </div>

            {/* __________________________________________________________________________________________ */}

            <div className="flip-card  max-lg:w-[100%] w-[30%] min-h-[300px] mx-auto cursor-pointer" onClick={()=>navigate("/services/data-analytics")}>
              <div className="flip-card-inner bg-[#1b0d38] w-[100%] ">
                <div className="flip-card-front flex flex-col justify-center items-center">
                  <img
                    src={data}
                    className="mx-auto w-[60px]"
                    alt="services"
                  />
                  <p className="text-center mt-5">Data Analytics</p>
                </div>
                <div className="flip-card-back flex justify-center items-center text-center p-4">
                  <p style={{color:"#090315"}}>Data Visualization, Exploratory Data Analysis, Data Cleaning, Statistical Analysis, Machine Learning for Data Analysis, Big Data Analytics, Data Mining, A/B Testing, Data-driven Decision Making, Business Intelligence, Data Storytelling, Text Analytics, Customer Segmentation, Anomaly Detection.</p>
                </div>
              </div>
            </div>

            {/* __________________________________________________________________________________________ */}

            <div className="flip-card  max-lg:w-[100%] w-[30%] min-h-[300px] mx-auto cursor-pointer" onClick={()=>navigate("/services/fullstack-develpoment")}>
              <div className="flip-card-inner bg-[#1b0d38] w-[100%] ">
                <div className="flip-card-front flex flex-col justify-center items-center">
                  <img
                    src={web}
                    className="mx-auto w-[60px]"
                    alt="services"
                  />
                  <p className="text-center mt-5">Full Stack Development</p>
                </div>
                <div className="flip-card-back flex justify-center items-center text-center p-4">
                  <p style={{color:"#090315"}}>Front-end Development, Back-end Development, Web Development Frameworks, Responsive Web Design, Databases and SQL, RESTful APIs, Cloud Computing, DevOps and CI/CD, Containerization (Docker), Web Security, User Experience (UX) Design, Cross-platform Development</p>
                </div>
              </div>
            </div>

            {/* __________________________________________________________________________________________ */}

            <div className="flip-card  max-lg:w-[100%] w-[30%] min-h-[300px] mx-auto cursor-pointer" onClick={()=>navigate("/services/ar-vr")}>
              <div className="flip-card-inner bg-[#1b0d38] w-[100%] ">
                <div className="flip-card-front flex flex-col justify-center items-center">
                  <img
                    src={ar}
                    className="mx-auto w-[60px]"
                    alt="services"
                  />
                  <p className="text-center mt-5">AR / VR</p>
                </div>
                <div className="flip-card-back  flex justify-center items-center text-center p-4">
                  <p style={{color:"#090315"}}>AR/VR Applications, Immersive Experiences, AR/VR Content Creation, 3D Modeling for AR/VR, AR/VR in Gaming, AR/VR in Education, AR/VR in Healthcare, AR/VR Interaction Design, AR/VR User Interfaces, AR/VR Simulations, AR/VR Hardware Advances.</p>
                </div>
              </div>
            </div>

            {/* <div
          className="bg-[#1b0d38] flex justify-center items-center px-10 py-10 max-lg:w-[100%] w-[30%] min-h-[300px] mx-auto"
          style={{ boxShadow: " 0px 25px 20px -20px #361E5B45" }}
        >
          <div>
          <img src={ar} className="mx-auto w-[60px]" alt="services"/>
          <p className="text-center mt-5">AR / VR</p>
          </div>
        </div> */}
          </div>
          <ButtonPrimary text={"Explore More"} className="mt-20 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Services;
