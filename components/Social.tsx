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
    <Container className="py-0 flex justify-center">
      <div className="w-full flex gap-2 justify-between relative z-50">
        <div>
          <p>
            @2022 LitDev. <br />
            Terms of Service · Privacy policy
          </p>
        </div>
        <div className="flex gap-2">
          {socialItems.map((item, index) => (
            <div
              key={index}
              className=" p-1.5 h-10 w-10 rounded-md cursor-pointer text-[#7A8BA0] "
            >
              <a href={item.url} target="blank">
                <img src={item.icon} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* <ScroolTopButton /> */}
    </Container>
  );
}

const socialItems = [
  {
    name: "Linkedin",
    icon: "/assets/icons/Linkedin.png",
    url: "",
  },
  {
    name: "Instagram",
    icon: "/assets/icons/instagram.png",
    url: "",
  },
];
