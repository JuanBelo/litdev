/* eslint-disable @next/next/no-img-element */
import { Container, Section, Image, ScroolTopButton } from "./utils";
import { CaretUp } from "phosphor-react";

export function Social() {
  return (
    <div className="border-[0px] border-surface-875 py-6">
      <Container className="py-0 flex justify-between">
        <div className="flex gap-2 lg:justify-start justify-center">
          {socialItems.map((item, index) => (
            <div
              key={index}
              className="bg-surface-875 p-1 h-10 w-10 rounded-md cursor-pointer hover:bg-surface-875"
            >
              <a href={item.url} target="blank">
                <img
                  className="w-full color-red-500"
                  src={item.icon}
                  alt={item.name}
                />
              </a>
            </div>
          ))}
        </div>
        <ScroolTopButton />
      </Container>
    </div>
  );
}

const socialItems = [
  {
    name: "Linkedin",
    icon: "/assets/icons/icon-linkedin.svg",
    url: "https://www.linkedin.com/school/gonew-co/",
  },
  {
    name: "Instagram",
    icon: "/assets/icons/icon-instagram.svg",
    url: "https://www.instagram.com/gonew.co/",
  },
  {
    name: "Email",
    icon: "/assets/icons/icon-email.svg",
    url: "mailto:info@gonew.co",
  },
];
