import React, { useState, useEffect } from "react";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

function Homesectionseven() {
  const arr = [
    {
      img: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
      unsplash:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Judith Black",
      designatioin: "CEO of Workcation",
    },
    {
      img: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
      des: "Hellow ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
      unsplash:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "John Doe",
      designatioin: "CTO of Workcation",
    },
    {
      img: "https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg",
      des: "Noraiz ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
      unsplash:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      name: "Alice Johnson",
      designatioin: "COO of Workcation",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [arr.length]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % arr.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? arr.length - 1 : (prevIndex - 1) % arr.length
    );
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 flex right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="flex items-center">
        <GrFormPreviousLink
          className="text-9xl md:text-5xl  hover:text-[#01b6] cursor-pointer mx-1 md:mx-5 text-white bg-[#01b6] p-1  rounded-full"
          onClick={handlePrev}
        />

        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img alt="" src={arr[activeIndex].img} className="mx-auto h-12" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl md:font-semibold leading-8 text-gray-900 sm:text-xl sm:leading-9">
              <p className="">{arr[activeIndex].des}</p>
            </blockquote>
            <figcaption className="mt-10 text-center">
              <img
                alt=""
                src={arr[activeIndex].unsplash}
                className="mx-auto h-10 w-10 rounded-full"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">
                  {arr[activeIndex].name}
                </div>
                <svg
                  width={3}
                  height={3}
                  viewBox="0 0 2 2"
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">
                  {arr[activeIndex].designatioin}
                </div>
              </div>
            </figcaption>
          </figure>
        </div>

        <GrFormNextLink
          className="text-9xl md:text-5xl hover:text-[#01b6] cursor-pointer mx-1 md:mx-5 text-white bg-[#01b6] p-1 rounded-full"
          onClick={handleNext}
        />
      </div>
    </section>
  );
}

export default Homesectionseven;
