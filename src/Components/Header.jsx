import React from "react";
import HeaderLogo from "../assets/headerLogo.png";

const Header = () => {
  return (
    <header className="py-3 w-full absolute top-0">
      <nav className="container flex justify-between items-center">
        <a href="" className="flex items-center gap-5">
          <img src={HeaderLogo} alt="" />
          <div className="text-white text-4xl font-primary leading-7">
            Pepe Planet
          </div>
        </a>

        <a
          href=""
          className=" hover:bg-transparent hover:shadow-none hover:border transition hidden md:block px-8 py-4 bg-blue-900 rounded shadow justify-center items-center gap-2.5 text-white text-[16px] font-extrabold leading-snug tracking-wide font-primary"
        >
          TELEGRAM
        </a>
      </nav>
    </header>
  );
};

export default Header;
