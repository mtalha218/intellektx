import React from "react";
import gmail from "../../assets/gmail.png";
import phone from "../../assets/phone.png"
import linkedin from "../../assets/linkedin.png"
import insta from "../../assets/insta.png"
import twitter from "../../assets/twitter.png"
import ButtonPrimary from "../../Components/Button/ButtonPrimary";
const ContactUs = () => {
  return (
    <div className="w-[90%] mx-auto pt-12 pb-36 px-24 contact-us">
      <div className="flex">
        <div className="w-[40%] px-8">
          <p className="text-heading1 ">Contact Us</p>
          <div className="flex items-center gap-10 mt-12">
            <img className="w-[30px]" src={gmail} />
            <p className="opacity-70">abcd123@gmail.com</p>
          </div>
          <div className="flex items-center gap-8 mt-10">
            <img className="w-[35px]" src={phone} />
            <p className="opacity-70">+92 331 1233456</p>
          </div>

          <div className="flex gap-12 mt-12">
          <img className="w-[40px] cursor-pointer" src={linkedin} />
          <img className="w-[40px] cursor-pointer" src={insta} />
          <img className="w-[40px] cursor-pointer" src={twitter} />
          </div>
        </div>
        <div className="w-[60%] px-8">
            <form>
                <input placeholder="Your Name" className="px-6 py-4 text-[#FFFFFF] bg-[#361E5B] w-[100%] rounded"/>
                <input placeholder="Your Email" className="px-6 py-4 text-[#FFFFFF] bg-[#361E5B] w-[100%] rounded mt-6"/>
                <textarea placeholder="Enter your message here" className="px-6 py-4 text-[#FFFFFF] bg-[#361E5B] w-[100%] min-h-[200px] rounded mt-6 resize-none" />
                <ButtonPrimary text="Send Message" className={"mt-6"}/>
            </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
