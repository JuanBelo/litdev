import Typewriter from "typewriter-effect";
import { ArrowRight, ClockCounterClockwise } from "phosphor-react";
import { Container } from "./utils";

export function Hero() {
  return (
    <>
      <div className="flex justify-center w-full flex-col items-center gap-5">
        {/*  <h4 className="mb-4 font-light text-brand-litdev-500 font-Source+Sans+Pro">
          💡 Hey Devs
        </h4> */}
        <p className="text-center text-4xl md:text-7xl font-bold font-inter">
          Save The Devs
        </p>
        <div className="flex justify-center items-center">
          <h6 className="text-xl md:text-2xl text-white text-center font-inter opacity-60">
            Solicite uma mentoria ou <br className="flex md:hidden" />
            seja um mentor!
          </h6>
        </div>
        <div className="mt-2 flex gap-2 lg:gap-3">
          <div>
            <div
              style={{ boxShadow: "0px 4px 140px rgba(0, 0, 0, 0.68)" }}
              className="cursor-pointer flex gap-2 bg-brand-litdev-625 pl-6 lg:pl-6 pr-5 lg:pr-4 py-3 rounded-[10px] items-center hover:opacity-90"
            >
              <h4 className="text-sm md:text-lg font-bold font-sans tracking-wider mr-2 ">
                EARLY ACCESS
              </h4>
              <div className="bg-white bg-opacity-5 p-1 rounded-[5px] w-8 h-8 flex justify-center items-center">
                <ClockCounterClockwise className="text-white" weight="bold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*  <span className="mb-4 ">
            <span className="">&lt;</span>Sua dose diária
          </span>
          <div className="flex justify-center">
            <span className="">&nbsp;de&nbsp;</span>
            <span className="">
              <Typewriter
                options={{
                  strings: ["Luz", "Ideias"],
              
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            <span className="">
              <span>/</span>
              <span>&gt;</span>
            </span> */
