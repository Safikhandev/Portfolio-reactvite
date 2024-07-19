import React from "react";
import { SiWebflow } from "react-icons/si";

function Homesectionthree() {
  let arr = [
    {
      name: "Webflow",
      icon: <SiWebflow className="text-5xl" />,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate alias mioia kale kk k jj die. Ab, iure sit.",
    },
    {
      name: "Webflow",
      icon: <SiWebflow className="text-5xl" />,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate alias mioia kale kk k jj die. Ab, iure sit.",
    },
    {
      name: "Webflow",
      icon: <SiWebflow className="text-5xl" />,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate alias mioia kale kk k jj die. Ab, iure sit.",
    },
    {
      name: "Webflow",
      icon: <SiWebflow className="text-5xl" />,
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate alias mioia kale kk k jj die. Ab, iure sit.",
    },
  ];
  return (
    <>
      <div className="w-full flex flex-cols-4 flex-wrap my-20 justify-center">
        {arr.map((item) => (
          <div className="mx-5 md:w-[20%]  flex flex-col items-center rounded shadow border px-10 py-3">
            {item.icon}
            <h3 className="md:text-2xl py-2 font-bold">{item.name}</h3>
            <p className="text-center py-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Homesectionthree;
