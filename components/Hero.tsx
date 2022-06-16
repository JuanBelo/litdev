import Typewriter from "typewriter-effect";
import { ArrowRight } from "phosphor-react";

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        background:
          "linear-gradient(50deg, #161c2460, #161c2460 100%), url(/assets/images/HeroBackGround.png) no-repeat 49% center",
        backgroundSize: "cover",
      }}
      className="border-b-[1px] border-gray-700  lg:h-[calc(100vh-5.5rem)] h-[calc(70vh-5.5rem)]"
    >
      <div className=" h-full w-full flex justify-center items-center">
        <div className="flex justify-center w-full flex-col items-center">
          <h4 className="mb-4 font-light text-brand-litdev-500">💡 Hey Devs</h4>
          <div className="flex">
            <h1 className="mb-8 md:text-5xl text-3xl font-bold">
              <span className="text-brand-litdev-600">&lt;</span>Sua dose diária
              de&nbsp;
            </h1>
            <h1 className="mb-8 md:text-5xl text-3xl font-bold">
              <Typewriter
                options={{
                  strings: ["Luz", "Ideias"],
                  /*  delay: [60], */
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <h1 className="mb-8 md:text-5xl text-3xl font-bold">
              <span className="text-brand-litdev-500">/</span>
              <span className="text-brand-litdev-600">&gt;</span>
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <h6 className="mb-8 md:text-lg text-brand-litdev-600">
              Conecte-se com devs de todo o mundo.
            </h6>
          </div>
          <div className="flex gap-3">
            <div>
              <div className="cursor-pointer flex gap-2 bg-brand-litdev-625 pl-6 pr-4 py-3 rounded-[5px] items-center hover:opacity-90">
                <h4 className="font-bold font-sans mr-2">ILUMINAR</h4>
                <div className="bg-brand-litdev-650 p-1 rounded-sm w-8 h-8 flex justify-center items-center">
                  <ArrowRight className="text-white" weight="bold" />
                </div>
              </div>
            </div>
            <div>
              <div className="cursor-pointer flex gap-2 bg-brand-litdev-500 pl-6 pr-4 py-3 rounded-[5px] items-center hover:opacity-90">
                <h4 className="font-bold font-sans mr-2">SER ILUMINADO</h4>
                <div className="bg-brand-litdev-550 p-1 rounded-sm w-8 h-8 flex justify-center items-center">
                  <ArrowRight className="text-white" weight="bold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
