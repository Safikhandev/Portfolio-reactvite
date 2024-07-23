import React from "react";

function ContactSectionTwo() {
  return (
    <div className="bg-[#add8e6] py-20">
      <div className="border-2 py-10 px-10 text-center  w-1/2 mx-auto my-10 bg-[#add8e6] shadow-indigo-500/40 shadow-lg">
        <h1 className="text-5xl">Login Form</h1>
        <form className="text-left my-10 ">
          <div className="text-left grid my-2">
            <label htmlFor="firstName" className="text-2xl py-3">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="border-2 py-2 px-5 "
              placeholder="First Name"
            />
          </div>
          <div className="text-left grid my-2">
            <label htmlFor="firstName" className="text-2xl py-3">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              className="border-2 py-2 px-5 "
              placeholder="Last Name"
            />
          </div>
          <div className="text-left grid my-2">
            <label htmlFor="firstName" className="text-2xl py-3">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="border-2 py-2 px-5 "
              placeholder="Enter your email"
            />
          </div>
          <div className="text-left grid my-2">
            <label htmlFor="firstName" className="text-2xl py-3">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              className="border-2 py-2 px-5 "
              placeholder="Enter your phone"
            />
          </div>
          <div className="text-left grid my-2">
            <label htmlFor="firstName" className="text-2xl py-3">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="border-2 py-2 px-5 "
              placeholder="Enter your password"
            />
            <button
              className="py-2  mt-10 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
              // onClick={login}
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSectionTwo;
