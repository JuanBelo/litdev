import Typewriter from "typewriter-effect";
import { ArrowRight, ClockCounterClockwise } from "phosphor-react";
import { Container, EarlyAccessButton } from "./utils";

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
          <h6 className="text-xl md:text-xl text-white text-center font-inter opacity-60 font-normal">
            Solicite uma mentoria ou <br className="flex md:hidden" />
            seja um mentor!
          </h6>
        </div>
        <div className="mt-2 flex gap-2 lg:gap-3">
          <EarlyAccessButton />
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
