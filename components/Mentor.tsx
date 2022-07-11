import { X } from "phosphor-react";
import React from "react";
import { Container } from "./utils";
import { BlurBox } from "./utils/BlurBox";

export function Mentor() {
  return (
    <BlurBox className="px-8 pb-16 pt-10">
      <div className="flex flex-col gap-8 items-center">
        <p className="font-inter font-bold text-2xl tracking-wide">Mentorar</p>
        <div className="bg-white bg-opacity-10 py-3 rounded-[5px] text-center px-16 lg:px-24">
          <p className="font-inter text-md lg:text-md">Em breve... </p>
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
