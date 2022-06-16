import { Container, Section, Image, ScroolTopButton } from "./utils";
import { Sun, Lightning } from "phosphor-react";

export function WaitingList() {
  return (
    <>
      <Section>
        <Container>
          <div className="container flex flex-col justify-center items-center">
            <div className="w-full flex flex-col items-center text-center">
              <div className="flex flex-wrap w-full flex-col items-center text-center">
                <h1 className="sm:text-5xl text-2xl font-bold title-font mb-2 text-white">
                  Lista de Espera
                </h1>
                <p className="w-full leading-relaxed opacity-70 text-lg">
                  Seja notificado no lançamento!
                </p>
              </div>
              <div className="flex w-full justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                  <label
                    /* for="hero-field" */
                    className="leading-7 text-sm text-gray-400"
                  >
                    E-mail
                  </label>
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="inline-flex text-white bg-brand-litdev-500 border-0 py-2 px-6 focus:outline-none hover:bg-brand-litdev-550 font-medium  font-sans uppercase rounded text-md tracking-wide">
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

const features = [
  {
    title: "Ser Iluminado",
    description:
      "Conecte-se com um especialista e resolva problemas específicos.",
    icon: <Sun />,
  },
  {
    title: "Iluminar",
    description:
      "Resolva problemas e amplie seu conhecimento de forma remunerada.",
    icon: <Lightning />,
  },
  {
    title: "Em breve",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: <Sun />,
  },
];
