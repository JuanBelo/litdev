import Typewriter from "typewriter-effect";

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
              Conecte-se com devs do mundo todo e seja iluminado.
            </h6>
          </div>
          <div className="flex gap-3">
            <div>
              <div className="flex gap-2 bg-brand-litdev-625 pl-4 pr-3 py-1 rounded-sm items-center">
                <h4 className="font-bold fo">ILUMINAR</h4>
                <div className="bg-brand-litdev-650 p-1 rounded-sm w-6 h-6"></div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 bg-brand-litdev-500 pl-4 pr-3 py-1 rounded-sm items-center">
                <h4 className="font-bold fo">SER ILUMINADO</h4>
                <div className="bg-brand-litdev-550 p-1 rounded-sm w-6 h-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
