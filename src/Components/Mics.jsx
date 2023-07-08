import React from "react";
import mics1 from "../assets/mics1.png";
import mics2 from "../assets/mics2.png";

const Mics = () => {
  return (
    <section className="py-28 w-full relative  ">
      <img
        src={mics1}
        alt=""
        className="absolute left-0 top-0 w-[8rem] md:w-[15rem]"
      />
      <img
        src={mics2}
        alt=""
        className="absolute right-0 bottom-0 w-[8rem] md:w-[15rem]"
      />
      <div className="container flex gap-16 justify-center items-center  flex-col">
        <h1 className="text-center text-black mt-10 capitalize text-5xl md:text-7xl font-primary font-bold">
          tokenomics
        </h1>

        <article className="w-max grid grid-cols-1 gap-20 md:grid-cols-2 justify-center items-center">
          <div className=" flex-col justify-start items-center flex gap-6">
            <div className="text-white text-[100px] font-primary leading-10">
              1%
            </div>
            <div className="text-white text-[40px] font-primary leading-10">
              TAX
            </div>
          </div>
          <div className=" flex-col justify-start items-center flex gap-6">
            <div className="text-white text-[100px] font-primary leading-10">
              2%
            </div>
            <div className="text-white text-[40px] font-primary leading-10">
              MAX WALLET
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Mics;
