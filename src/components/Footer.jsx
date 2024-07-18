import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  const columnClass =
    "text-lg px-7 py-5 w-full md:w-[31%] sm:w-[100%] sm:duration-700 text-white";
  const linkClass = "flex flex-col hover:text-[#01b6] duration-700";

  return (
    <>
      <footer className="p-10 bg-[#00df9a]">
        <div className="max-w-[1200px] gap-10 flex flex-wrap justify-between mx-auto">
          <div className="text-white w-full md:w-[30%] sm:w-[100%] sm:duration-700 py-5 px-7">
            <Link to={"/"} className="text-4xl font-bold">
              Logo
            </Link>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Contrary
              to popular belief, Latin literature from 45 BC, making it over
              2000 years old.
            </p>
          </div>
          <div className={columnClass}>
            <h5>Useful Links</h5>
            <div className="gap-2 py-2 flex flex-col">
              <Link to={"/"} className={linkClass}>
                Home
              </Link>
              <Link to={"/about"} className={linkClass}>
                About
              </Link>
              <Link to={"/portfolio"} className={linkClass}>
                Portfolio
              </Link>
              <Link to={"/contact"} className={linkClass}>
                Contact
              </Link>
            </div>
          </div>
          <div className={columnClass}>
            <h5>Contact Us</h5>
            <div className="gap-2 py-2 flex flex-col">
              <div className="flex gap-2 items-center">
                <FaPhoneAlt />
                <Link to={"/"} className={linkClass}>
                  +123456789
                </Link>
              </div>
              <div className="flex gap-2 items-center">
                <MdEmail />

                <a href="mailto:CQpU4@example.com" className={linkClass}>
                  CQpU4@example.com
                </a>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <FaLocationDot />
              <Link to={"/"} className={linkClass}>
                street, city, country
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
