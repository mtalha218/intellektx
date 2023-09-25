import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";

const Testimonial = () => {
  const testimonials = [
    {
      text:
        "Intelektx has been a game-changer for us. Their deep understanding of AI and data science reshaped our strategies, boosting productivity and revenue. The team's dedication and innovation have made them our trusted partner for cutting-edge solutions",
      name: "George Patterson",
      pos: "CTO",
    },
    {
      text:
        "Intelektx is a game-changer! Their AI solutions streamlined our operations, and their web software is top-notch. The team's dedication to excellence and client satisfaction is commendable. Highly recommend!",
      name: "David Beckham",
      pos: "CEO",
    },
    {
      text:
        "Intelektx brought our vision to life with their web software expertise. Their AI solutions enhanced our productivity significantly. The team's professionalism and support made the journey seamless. Exceptional service!",
      name: "Cristiano Richard",
      pos: "CEO",
    },
    {
      text:
        "Intelektx is a true partner. Their AI and web software solutions have revolutionized our business. Their commitment to innovation and customer-centric approach make them our go-to choice. Phenomenal work!",
      name: "Robert Alan",
      pos: "CTO",
    },
    {
      text:
        "Intelektx exceeded our expectations! Their AI and web software services transformed our company. The team's expertise and personalized approach made the entire process a breeze. We're thrilled with the results! Thank you, Intelektx!",
      name: "Ben Affleck",
      pos: "Director of Operation",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-[90%] mx-auto pt-12 lg:px-24 pb-36">
      <div
        className="flex max-md:flex-col"
        style={{ boxShadow: "0px 25px 20px -20px #361E5B45" }}
      >
        <div className="w-[35%] max-md:w-[100%] px-16 py-16 flex justify-center items-center customer-left">
          <p className="text-heading2">Our customers saying</p>
        </div>
        <div className="w-[65%] max-md:w-[100%] bg-[#0e0521] pt-24 ">
          <div className="px-24 max-[600px]:px-6 pb-4 ">
            <p className="text-large" style={{ minHeight:"150px"}}>" {testimonials[currentIndex].text} "</p>
            <div className="mt-10">
              <p className="text-xl opacity-80">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-large">
                {testimonials[currentIndex].pos}
              </p>
            </div>
            <div className="flex justify-end w-[100%]">
              <div
                className="p-4 bg-[#361E5B] cursor-pointer"
                onClick={prevTestimonial}
              >
                <img style={{ width: "10px" }} src={arrow} alt="Previous" />{" "}
              </div>
              <div
                className="p-4 bg-[#361E5B] cursor-pointer"
                onClick={nextTestimonial}
              >
                <img
                  style={{ transform: "rotate(180deg)", width: "10px" }}
                  src={arrow}
                  alt="Next"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
