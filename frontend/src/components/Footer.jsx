import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo2} className="mb-5 w-30" />
          <p className="w-full md:w-1/2 text-gray-500">
            At TrendyWay, we believe shopping should be simple, smart, and
            accessible for everyone. From everyday essentials to the latest
            trends, we bring you a seasmless online shopping experience with
            reliable quality and customer-first service. Our goal is to make
            sure you find everything you need, all in one place with trust,
            style, and value that lasts.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">
            <li>+91 8130703182</li>
            <li>amanksingh010@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025@Aman</p>
      </div>
    </div>
  );
};

export default Footer;
