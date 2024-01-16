import React from "react";

const Cards = () => {


  return (

    <section className="bg-[#EDF7FA]">

      <div className="p-4 max-w-[1152px] lg:px-24 m-auto">


      <div className="justify-between pb-4 text-lg lg:flex">
        <p className="text-center">Recent posts</p>
        <a href="" className="hidden lg:block text-[#00A8CC]">View all</a>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        
      {/* Card */}
      <article className="p-4 bg-white rounded-md">
        <h2 className="text-2xl font-semibold lg:text-3xl lg:leading-snug">Making a design system from scratch</h2>
        <div className="flex pt-4 pb-6">
          <p className="pr-4 border-r-2 border-[#21243D]">12 feb 2020</p>
          <p className="pl-4">Design, Pattern</p>
        </div>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </article>

      {/* Card */}
      <article className="p-4 bg-white rounded-md">
        <h2 className="text-2xl font-semibold lg:text-3xl lg:leading-snug">Creating pixel perfect icons in Figma</h2>
        <div className="flex pt-4 pb-6">
          <p className="pr-4 border-r-2 border-[#21243D]">12 feb 2020</p>
          <p className="pl-4">Design, Pattern</p>
        </div>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </article>

      </div>
      

      </div>
      
    </section>
    
  );
};

export default Cards;
