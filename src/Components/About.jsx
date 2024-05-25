import React from "react";
import { Button } from "react-scroll";
import img from "../assets/img/about.png";
const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        About Us
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="w-full lg:w-2/4">
          <img className="rounded-lg" src={img} alt="img" />
        </div>
        <div className="w-full lg:w-2/4 p-4 space-y-3">
          <h2 className="font-semibold text-3xl">
            Lorem ipsum dolor sit amet.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio
            est aut iure inventore quasi non, saepe hic fuga, ipsum modi
            laboriosam! Enim dicta recusandae modi iure sequi, a voluptatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            beatae optio illum nesciunt ex facere non ratione unde soluta ea!
          </p>

          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
