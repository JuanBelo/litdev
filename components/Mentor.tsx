import { X } from "phosphor-react";
import React from "react";
import { Container } from "./utils";
import { BlurBox } from "./utils/BlurBox";

export function Mentor() {
  return (
    <BlurBox className="px-8 pb-16 pt-10">
      <div className="flex flex-col gap-8 items-center">
        <p className="font-inter font-bold text-2xl tracking-wide">Mentorar</p>
        <div className="flex w-fit justify-center items-center gap-2 bg-white bg-opacity-10 py-3 rounded-full text-center px-4 relative">
          <div className="relative h-5 w-5 flex justify-center items-center">
            <span className="animate-ping w-2.5 h-2.5 bg-green-600/75 rounded-full absolute"></span>
            <span className="w-2.5 h-2.5 bg-green-600 rounded-full absolute"></span>
          </div>

          <span className="font-inter text-white">Você está online</span>
          <div className="flex">
            <label className="inline-flex relative items-center cursor-pointer focus:outline-none ml-1">
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                className="sr-only peer focus:outline-none"
              />
              <div className="focus:outline-none border-none w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
            </label>
          </div>
        </div>
      </div>
    </BlurBox>
  );
}

const tecgnologies = [
  {
    name: "React",
    logo: "/assets/logos/react.png",
    url: "https://reactjs.org/",
  },
  {
    name: "JavaScript",
    logo: "/assets/logos/js.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "MongoDB",
    logo: "/assets/logos/mongodb.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
];

{
  /* <div
            style={{
              boxShadow: "0px 4px 250px rgba(0, 0, 0, 0.5)",
            }}
            className="w-full h-fit bg-[#606976] rounded-[15px] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 "
          > */
}
{
  /*  </div> */
}
