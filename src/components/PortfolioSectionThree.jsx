import React from "react";

function PortfolioSectionThree() {
  const arr = [
    {
      img: "./images/image1.jpg",
      alt: "image1",
    },
    {
      img: "./images/image1.jpg",
      alt: "image1",
    },
    {
      img: "./images/image1.jpg",
      alt: "image1",
    },
    {
      img: "./images/image1.jpg",
      alt: "image1",
    },
    {
      img: "./images/image1.jpg",
      alt: "image1",
    },
    {
      img: "./images/image1.jpg",
      alt: "image1",
    },
  ];
  return (
    <div className="my-20 bg-[#232323] text-white py-20 ">
      <div className="max-w-[1200px] mx-auto justify-center">
        <h1 className="text-3xl text-center text-white">The Stuff we Love</h1>
        <div className="border-t-2 w-[90px] mx-auto my-5 text-white"></div>
        <div className="my-10 flex flex-wrap gap-5 mx-5  justify-center ">
          {arr.map((item) => (
            <div className="border rounded  shadow-lg shadow-gray-500/50 w-full sm:w-[45%] md:w-[32%]">
              <img
                src={item.img}
                className="w-[100%] h-[200px]"
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioSectionThree;
