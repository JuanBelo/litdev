import { X } from "phosphor-react";
import React from "react";
import { Container } from "./utils";
import { BlurBox } from "./utils/BlurBox";

export function SearchMentor() {
  return (
    <BlurBox className="px-8 pb-16 pt-10">
      <div className="flex flex-col gap-8 items-center">
        <p className="font-inter font-bold text-2xl tracking-wide">
          Procurar Mentor
        </p>
        <div className="bg-white bg-opacity-10 py-3 rounded-full text-center px-8 lg:px-10">
          <p className="font-inter text-md lg:text-md">Buscar tecnologia </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-3">
          {tecgnologies.map((technology, index) => (
            <div
              className="bg-[#5B6575] rounded-full w-fit px-2 py-1 font-roboto tracking-wide flex gap-2 justify-center items-center"
              key={index}
            >
              <div className="w-4 h-4 self-center rounded-sm overflow-hidden">
                <img src={technology.logo} className=" w-fit h-4" />
              </div>

              <p className="text-md mt-[1px]">{technology.name}</p>
              <X weight="bold" className="cursor-pointer opacity-50" />
            </div>
          ))}
          <div className="bg-white bg-opacity-70 rounded-full w-fit px-3 py-1 font-roboto tracking-wide flex gap-2 justify-center items-center">
            <p className="text-md mt-[1px] text-black">Clean</p>
            <X weight="bold" className="cursor-pointer opacity-50 text-black" />
          </div>
        </div>
        <div className="bg-white bg-opacity-[1%] border border-[#444a57] rounded-md w-full py-4 px-5 font-roboto tracking-wide flex flex-col gap-2 justify-start max-w-4xl">
          <p className="text-md">Problema ao integrar MongoDB</p>
          {/* <p className="text-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p> */}
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
