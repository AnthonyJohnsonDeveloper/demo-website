import React from "react";
import ProductCard from "../layouts/ProductCard";
import img1 from "../assets/img/product1.png";
import img2 from "../assets/img/product2.png";
import img3 from "../assets/img/product3.png";


const Product = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-024 mb-8">
        Our Products
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 justify-center">
        <ProductCard img={img1} title="Lorem ipsum" />
        <ProductCard img={img2} title="Lorem ipsum" />
        <ProductCard img={img3} title="Lorem ipsum" />
      </div>
    </div>
  );
};

export default Product;
