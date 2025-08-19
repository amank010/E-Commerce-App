import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <div className="">
      <div className="text-center pt-8 border-t text-2xl ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-5 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At TrendyWay, we believe shopping should be simple, enjoyable, and
            accessible for everyone. Born out of a passion for innovation and
            style, we aim to bring together quality products, affordable prices,
            and a seamless online experience. Whether you’re looking for the
            latest fashion trends, everyday essentials, or unique lifestyle
            finds, our collections are curated with care to suit your needs.
            More than just an e-commerce platform, TrendyWay is built on trust,
            community, and the idea that shopping is not just about what you
            buy, but the experience you enjoy along the way.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to build trust through quality, value, and service
            creating a shopping experience you can count on every time.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE  US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We take pride in delivering only the best. Every product at
            TrendyWay goes through careful selection and quality checks to
            ensure it meets our high standards. From materials to packaging, we
            prioritize excellence so you can shop with confidence knowing that
            quality is never compromised.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convience</b>
          <p className="text-gray-600">
            Shopping should be simple, smooth, and stress-free. That’s why
            TrendyWay is designed to bring you a seamless experience from
            browsing and checkout to fast delivery at your doorstep. With
            everything you need just a click away, we make convenience a part of
            every purchase.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            At TrendyWay, customers are at the heart of everything we do. Our
            dedicated support team is always ready to assist, ensuring your
            questions are answered and your concerns resolved quickly. We
            believe exceptional service doesn’t stop at purchase it’s about
            building lasting relationships.
          </p>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default About;
