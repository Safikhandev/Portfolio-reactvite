import React from "react";

function Homesectiontwo() {
  return (
    <>
      <div className="max-w-[1200px]  mb-10 md:grid grid-cols-3 md:grid-cols-3 justify-between sm:mx-auto ">
        <div className="text-left  px-5 col-span-2  md:w-[85%] flex flex-col justify-center">
          <h1 className="text-3xl mb-2">Hi, I'm Sufyan</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            architecto, modi suscipit ipsum, ullam, explicabo odit mollitia quos
            culpa pariatur rem error et. architecto, modi suscipit ipsum, ullam,
            explicabo odit mollitia quos culpa pariatur rem error et. culpa
            pariatur rem error et. architecto, modi suscipit ipsum, ullam,
            explicabo odit mollitia quos culpa pariatur rem error et.
          </p>
          <button className="md:w-[30%] w-[40%] xs:w-[50%] py-2 px-4 bg-[#01b6] my-2  sm:mb-10 text-white mt-3 md:mt-3 rounded">
            View Projects
          </button>
        </div>
        <div className="w-[100%] col-span-1 px-5">
          <img
            className="rounded-lg mx-auto h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] my-5 "
            src="https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Homesectiontwo;
