import React from "react";
import img from "../Assets/Group 1.png";

const Hero = () => {
  
  return (

    <section className="p-4 max-w-[1152px] lg:px-24 m-auto w-full mb-8 md:grid grid-cols-2 md:mb-16 md:mt-32">
      

      <div className="flex justify-center mb-8 lg:justify-end">
        <img className="mt-8 md:mt-0 size-40 lg:ml-16 md:size-60 lg:size-80" src={img} alt="" />
      </div>

      <div className="justify-center col-start-1 row-start-1 text-center md:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8 max-w-[300px] md:max-w-[100%] m-auto lg:leading-snug">Hi, I am John, <br /> Creative Technologist</h1>
        <p className="mb-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <button className="text-lg">Download Resume</button>
      </div>


    </section>
    
  );
};

export default Hero;
