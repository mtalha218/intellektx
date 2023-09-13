import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import arrow from "../../assets/arrow.svg"
const Testimonial = () => {
  const testimonial = [
    {
      text: "Intelektx has been a game-changer for us. Their deep understanding of AI and data science reshaped our strategies, boosting productivity and revenue. The team's dedication and innovation have made them our trusted partner for cutting-edge solutions.",
      name: "George Patterson",
      pos: "Managing Director",
    },
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem sit amet consectetur adipisicing elit. Rem facere adipisicing elit Rem facere adipisicing elit. sit amet consectetur adipisicing elit. Rem facere adipisicing elit",
      name: "David Beckham",
      pos: "President",
    },
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem facere adipisicing elit. sit amet consectetur adipisicing elit. Rem facere adipisicing elit",
      name: "Cristiano Ronaldo",
      pos: "Managing Director",
    },
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem facere adipisicing elit. sit amet consectetur adipisicing elit. Rem facere adipisicing elit Rem facere adipisicing elit. ctetur adipisicing elit. Rem facere adipisicing elit",
      name: "Robert De Niro",
      pos: "Business Man",
    },
  ];
  return (
    <div className="w-[90%] mx-auto pt-12 lg:px-24 pb-36">
      <div className="flex max-md:flex-col" style={{ boxShadow: " 0px 25px 20px -20px #361E5B45" }}>
        <div className="w-[35%] max-md:w-[100%] px-16 py-16 flex justify-center items-center customer-left">
          <p className="text-heading2">Our customers saying</p>
        </div>
        <div className="w-[65%] max-md:w-[100%] bg-[#0e0521] pt-24 ">
          <div className="px-24 max-[600px]:px-6 pb-4 ">
            <p className="text-large">" {testimonial[0].text} "</p>
            <div className="mt-10">
              <p className="text-xl opacity-80">{testimonial[0].name}</p>
              <p className="text-large">{testimonial[0].pos}</p>
            </div>
            <div className="flex justify-end w-[100%]">
              <div className="p-4 bg-[#361E5B] cursor-pointer">
                <img style={{width:"10px"}} src={arrow}/>{" "}
              </div>

              <div className="p-4 bg-[#361E5B] cursor-pointer">
                <img style={{transform:"rotate(180deg)", width:"10px"}} src={arrow}/>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
