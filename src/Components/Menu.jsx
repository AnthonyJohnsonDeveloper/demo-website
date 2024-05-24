import React from "react";
import MenuCard from "../layouts/MenuCard";
import img1 from "../assets/img/menu1.png";
import img2 from "../assets/img/menu2.png";
import img3 from "../assets/img/menu3.png";
import img4 from "../assets/img/menu4.png";
import img5 from "../assets/img/menu5.png";
import img6 from "../assets/img/menu6.png";
const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl mt-24 mb-8">
        Our Menu
      </h1>

      <div className="flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img={img1} title="Lorem" />
        <MenuCard img={img2} title="Lorem" />
        <MenuCard img={img3} title="Lorem" />
        <MenuCard img={img4} title="Lorem" />
        <MenuCard img={img5} title="Lorem" />
        <MenuCard img={img6} title="Lorem" />
      </div>
    </div>
  );
};

export default Menu;
