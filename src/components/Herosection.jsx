import React from "react";

function Herosection() {
  const bgImg =
    "url('https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
  return (
    <div
      id="hero"
      className="w-full h-[85vh] bg-center mt-16 mb-10 bg-cover bg-no-repeat"
      style={{
        backgroundImage: bgImg,
      }}
    >
      <div className="w-full h-[85vh] bg-black/70 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl py-5 sm:py-10 sm:text-7xl font-bold text-white">
            Hi, I'm Sufyan
          </h1>
          <p className="sm:text-2xl text-white">I'm a Frontend Developer</p>
          <button className="py-2 px-4 sm:py-3 sm:px-6 bg-[#01b6] my-5  sm:mb-10 text-white mt-3 sm:mt-5 rounded">
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
