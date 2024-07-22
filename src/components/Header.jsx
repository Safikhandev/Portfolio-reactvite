import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu4Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

function Header() {
  const [toggle, setToggle] = useState([false]);

  return (
    <>
      {/* ///////////////////////////////////////////////////////////// /// navbar start */}
      <header className="z-50 p-4   bg-[#00df9a] shadow fixed top-0 w-full">
        <nav className="max-w-[1220px]  items-center flex justify-between mx-auto">
          <div className="text-4xl font-bold text-white">
            <Link to={"/"}>Logo</Link>
          </div>
          {toggle ? (
            <RiMenu4Fill
              onClick={() => setToggle(!toggle)}
              className="text-3xl md:hidden block sm:order-last xs:order-last text-white"
            />
          ) : (
            <IoCloseSharp
              onClick={() => setToggle(!toggle)}
              className="text-3xl md:hidden block sm:order-last xs:order-last text-white"
            />
          )}

          <ul className="hidden md:flex text-white gap-10">
            <Link to={"/"} className="duration-700 hover:[color:#01b6]">
              Home
            </Link>
            <Link to={"about"} className="duration-700 hover:[color:#01b6]">
              About
            </Link>
            <Link to={"portfolio"} className="duration-700 hover:[color:#01b6]">
              Portfolio
            </Link>
            <Link to={"contact"} className="duration-700 hover:[color:#01b6]">
              Contact
            </Link>
          </ul>

          {/* ////////////// responsive menu */}

          <ul
            className={`md:hidden fixed top-20 
              ${
                toggle ? "left-[-100%] duration-700" : "left-0 duration-700"
              }  right-0 flex flex-col items-center text-1xl justify-center w-full h-screen bg-[black]  text-white gap-10`}
          >
            <Link to={"/"} className="duration-700 hover:[color:#01b6]">
              Home
            </Link>
            <Link to={"about"} className="duration-700 hover:[color:#01b6]">
              About
            </Link>
            <Link to={"portfolio"} className="duration-700 hover:[color:#01b6]">
              Portfolio
            </Link>
            <Link to={"contact"} className="duration-700 hover:[color:#01b6]">
              Contact
            </Link>
          </ul>

          <div>
            <button className="sm: hidden xs:hidden md:block xs:justify-evenly sm:justify-evenly btn text-white bg-blue-500 px-5 py-2 rounded duration-300 hover:bg-[#01b6]">
              Get in touch
            </button>
          </div>
        </nav>
      </header>

      {/* /// navbar end ///////////////////////////////////////////////////////////// */}
    </>
  );
}

export default Header;
