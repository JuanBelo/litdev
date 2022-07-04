import React from "react";

export function First() {
  return (
    <div className="w-full flex justify-center">
      <div
        style={{
          boxShadow: "0px 4px 250px rgba(0, 0, 0, 0.1)",
        }}
        className="h-[20rem] w-full bg-[#606976] rounded-[15px] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 absolute z-50 -mt-[10rem] max-w-4xl flex flex-col gap-5 items-center p-8"
      >
        <p className="font-inter font-bold text-2xl tracking-wide">
          Procurar Mentor
        </p>
        <div className="bg-white bg-opacity-10 px-4 py-2 rounded-[5px] w-72 text-center">
          <p className="font-inter">Buscar tecnologia </p>
        </div>
      </div>
    </div>
  );
}
