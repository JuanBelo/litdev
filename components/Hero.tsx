import Typewriter from "typewriter-effect";
import { ArrowRight, ClockCounterClockwise } from "phosphor-react";
import { Container } from "./utils";

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        background:
          "linear-gradient(50deg, #161c2460, #161c2460 100%), url(/assets/images/HeroBackGround.png) no-repeat 49% center",
        backgroundSize: "cover",
      }}
      className="lg:h-[calc(120vh] h-[calc(95vh)]"
    >
      <Logo />
      <div className="absolute h-full w-full flex m-auto z-50 -mt-24">
        <div className="h-fit w-full flex justify-center items-center m-auto">
          <Container>
            <div className="flex justify-center w-full flex-col items-center">
              <h4 className="mb-4 font-light text-brand-litdev-500 font-Source+Sans+Pro">
                💡 Hey Devs
              </h4>
              <div className="block mb-5 lg:mb-3 lg:flex  font-opensans font-bold md:text-5xl text-4xl tracking-wide">
                <span className="mb-4 ">
                  <span className="">&lt;</span>Sua dose diária
                </span>
                <div className="flex justify-center">
                  <span className="">&nbsp;de&nbsp;</span>
                  <span className="">
                    <Typewriter
                      options={{
                        strings: ["Luz", "Ideias"],
                        /*  delay: [60], */
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                  <span className="">
                    <span>/</span>
                    <span>&gt;</span>
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <h6 className=" mb-8 text-xl md:text-2xl text-brand-litdev-700 tracking-wide text-center font-inter">
                  Solicite uma mentoria ou <br className="flex md:hidden" />
                  seja um mentor!
                </h6>
              </div>
              <div className="flex gap-2 lg:gap-3">
                <div>
                  <div
                    style={{ boxShadow: "0px 4px 140px rgba(0, 0, 0, 0.68)" }}
                    className="cursor-pointer flex gap-2 bg-brand-litdev-625 pl-4 lg:pl-6 pr-3 lg:pr-4 py-3 rounded-[10px] items-center hover:opacity-90"
                  >
                    <h4 className="text-sm md:text-lg font-bold font-sans tracking-wider mr-2 ">
                      EARLY ACCESS
                    </h4>
                    <div className="bg-white bg-opacity-5 p-1 rounded-[5px] w-8 h-8 flex justify-center items-center">
                      <ClockCounterClockwise
                        className="text-white"
                        weight="bold"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(27, 34, 44, 0) 0%, rgba(27, 34, 44, 0.557292) 25.38%, #1F232D 52.41%)",
        }}
        className="h-[100vh] w-full absolute z-10 top-0 mt-[20rem]"
      ></div>
    </section>
  );
}

function Logo() {
  return (
    <div className="absolute top-8 left-8 opacity-90">
      <div className="flex">
        <h4 className="font-bold">
          <span className="">&lt;</span>LitDev&nbsp;
        </h4>
        <h4 className="font-bold"></h4>
        <h4 className="font-bold">
          <span className="">/</span>
          <span className="">&gt;</span>
        </h4>
      </div>
    </div>
  );
}
