import React from "react";

function Homesectionsix() {
  const bgImg =
    "url('https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
  return (
    <>
      <div
        className="my-20 py-10 bg-cover bg-no-repeat bg-blend-soft-light	 bg-center bg-[#232323]"
        style={{ backgroundImage: bgImg }}
      >
        <div className="max-w-[1200px] mx-auto justify-center ">
          <h1 className="text-3xl text-center text-white">The Stuff we Love</h1>
          <p className="text-center text-white py-5 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            est odit alias, dolorem dicta facere fuga praesentium culpa nisi
            doloremque inventore corrupti aut provident at obcaecati sed sunt
            ducimus consectetur.
          </p>
        </div>
      </div>
    </>
  );
}

export default Homesectionsix;
