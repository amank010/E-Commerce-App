import React, { useContext, useEffect, useState } from "react";
// import { products } from '../assets/assets';
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { product } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = product.filter((item) => item.bestSeller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [product]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"Best"} text2={"Sellers"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          The Bestsellers Collection represents the perfect blend of quality,
          style, and trust. These are the products chosen and cherished by our
          customers time and again, making them the most reliable and in-demand
          pieces we offer. Explore the section to find tried, tested, and truly
          loved essentials.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.images[0]}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
