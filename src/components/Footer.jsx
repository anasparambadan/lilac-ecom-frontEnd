import React from "react";
import hero from "../assets/icons/hero.png";
import youtube from "../assets/icons/youtube.png";
import ln from "../assets/icons/ln.png";
import twitter from "../assets/icons/twitter.png";
import insta from "../assets/icons/insta.png";
import fb from "../assets/icons/fb.png";
import enq from "../assets/icons/enq.png";
import apple from "../assets/icons/apple.png";
import play from "../assets/icons/play.png";

const Footer = () => {
  const qlinks = ["Products", "Classifieds", "Contact us", "Login", "Sign Up"];
  const custArea = [
    "My Account",
    "Orders",
    "Tracking List",
    "Terms",
    "Privacy Policy",
    "Return policy",
    "My Cart",
  ];
  const venArea = [
    "Partner with us",
    "Training",
    "Procedures",
    "Terms",
    "Privacy Policy",
  ];
  const icons = [youtube, fb, insta, twitter, ln];

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-7 justify-items-center p-16">
      <div className="flex flex-col items-start gap-8">
        <div>
          <img src={hero} alt="" />
        </div>
        <span className="text-lg font-normal text-cgray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore{" "}
        </span>
        <div className="flex gap-3.5">
          {icons.map((link,i) => {
            return (
              <span className="w-[3.6rem] h-[3.6rem] bg-[#F8F8F8] rounded-xl flex items-center justify-center" key={i}>
                <img src={link} alt="" />
              </span>
            );
          })}
        </div>
      </div>

      <div>
        <span className="text-xl font-bold text-black">QUICK LINKS</span>
        <ul className="text-lg text-cgray">
          {qlinks.map((item,i) => {
            return <li className="mt-5" key={i}>{item}</li>;
          })}
        </ul>
      </div>
      <div>
        <span className="text-xl font-bold text-black">CUSTOMER AREA</span>

        <ul className="text-lg text-cgray">
          {custArea.map((item,i) => {
            return <li className="mt-5" key={i}>{item}</li>;
          })}
        </ul>
      </div>
      <div>
        <span className="text-xl font-bold text-black">CUSTOMER AREA</span>
        <ul className="text-lg text-cgray">
          {venArea.map((item,i) => {
            return <li className="mt-5" key={i}>{item}</li>;
          })}
        </ul>
      </div>

      <div className="flex flex-col justify-between items-start gap-7">
        <span className="text-xl font-bold text-black">CONTACT</span>
        <span className="text-lg font-normal text-cgray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </span>
        <div className="flex justify-start items-center gap-8">
          <span className="flex justify-center items-center gap-7">
            <img src={enq} alt="" />
            <span className="flex flex-col items-start gap-4">
              <p className="text-sm">Have any question?</p>
              <p className="text-lg text-cblue">+ 123 456 789</p>
            </span>
          </span>
          <div className="border-solid border-cblue border-2 rounded-xl flex items-center justify-center">
            <span className="font-bold text-l text-cblue px-8 py-4">CHAT</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
            <div className="bg-black  rounded-xl flex items-center justify-between gap-5 px-9 py-6">
                <img src={apple} alt="" />
                <span className="flex-col flex justify-between gap-1">
                    <p className="text-xs text-white whitespace-nowrap">Download on the</p>
                    <p className="text-xl text-white font-black">App Store</p>
                </span>
            </div>
            <div className="bg-black  rounded-xl flex items-center justify-between gap-5 px-7 py-6">
                <img src={play} alt="" />
                <span className="flex-col flex justify-between gap-1">
                    <p className="text-xs text-white">GET IT ON</p>
                    <p className="text-xl text-white font-black whitespace-nowrap">Google Play</p>
                </span>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Footer;
