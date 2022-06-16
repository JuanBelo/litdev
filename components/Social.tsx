/* eslint-disable @next/next/no-img-element */
import { Container, Section, Image, ScroolTopButton } from "./utils";
import {
  CaretUp,
  InstagramLogo,
  LinkedinLogo,
  EnvelopeSimple,
} from "phosphor-react";

export function Social() {
  return (
    <div className="border-[0px] border-surface-875 py-8">
      <Container className="py-0 flex justify-center">
        <div className="flex gap-2 justify-center">
          {socialItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-1.5 h-12 w-12 rounded-md cursor-pointer hover:bg-brand-litdev-600 transition-all transition-duration: 100ms"
            >
              <a href={item.url} target="blank">
                {item?.icon}
              </a>
            </div>
          ))}
        </div>
        {/* <ScroolTopButton /> */}
      </Container>
    </div>
  );
}

const socialItems = [
  {
    name: "Linkedin",
    icon: (
      <LinkedinLogo
        size="full"
        className="text-brand-litdev-600 hover:text-black transition-duration: 100ms"
      />
    ),
    url: "",
  },
  {
    name: "Instagram",
    icon: (
      <InstagramLogo
        size="full"
        className="text-brand-litdev-600 hover:text-black transition-duration: 100ms"
      />
    ),
    url: "",
  },
  {
    name: "Email",
    icon: (
      <EnvelopeSimple
        size="full"
        className="text-brand-litdev-600 hover:text-black transition-duration: 100ms"
      />
    ),
    url: "",
  },
];
