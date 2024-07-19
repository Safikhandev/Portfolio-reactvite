import React from "react";

function Homesectionfour() {
  const arr = [
    {
      img: "./public/images/image1.jpg",
      alt: "image1",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, nemo.",
    },
    {
      img: "./public/images/image1.jpg",
      alt: "image1",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, nemo.",
    },
    {
      img: "./public/images/image1.jpg",
      alt: "image1",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, nemo.",
    },
  ];
  return (
    <div className="my-20 bg-[#232323] text-white py-20 ">
      <div>
        <h1 className="text-3xl text-center text-white">The Stuff we Love</h1>
        <div className="border-t-2 w-[90px] mx-auto my-5 text-white"></div>
        <div className="my-10 flex flex-wrap gap-5 mx-5  justify-center ">
          {arr.map((item) => (
            <div className="border rounded  shadow-lg shadow-gray-500/50 w-full sm:w-[45%] md:w-[29%]">
              <img
                src={item.img}
                className="w-[100%] h-[200px]"
                alt={item.alt}
              />
              <p className="text-white p-5 text-center">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homesectionfour;
