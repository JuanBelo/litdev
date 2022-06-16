import { Container, Section, Image, ScroolTopButton } from "./utils";
import { Sun, Lightning } from "phosphor-react";

export function WhatIs() {
  return (
    <>
      <Section>
        <Container>
          <div className="flex w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-5xl text-2xl font-bold title-font mb-6 text-white">
              Como funciona?
            </h1>
            <p className="w-full leading-relaxed opacity-70 text-md">
              Feito de devs para devs, o LiDev possibilita a conexão instantânea
              entre desenvolvedores que precisam de uma luz para algum problema
              específico, e devs que querem ampliar ainda mais seus
              conhecimentos ajudando a resolver problemas de forma remunerada.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {features?.map((item, index) => (
              <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                  <div className="flex gap-4 items-center mb-4">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-brand-litdev-600">
                      {item.icon}
                    </div>
                    <h2 className="text-lg text-white font-bold title-font">
                      {item.title}
                    </h2>
                  </div>

                  <p className="leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
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
