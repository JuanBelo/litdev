import Typewriter from "typewriter-effect";
import { ArrowRight, ClockCounterClockwise } from "phosphor-react";
import { Container } from "./utils";
import { Children } from "react";
import { BlurBackGround } from "./utils/BlurBackGround";

interface HeroProps {
  children: React.ReactNode;
}

export function Background({ children }: HeroProps) {
  return (
    <>
      <BlurBackGround>
        <div className="xl:px-0 lg:px-6 md:px-6 px-8 max-w-6xl m-auto w-full mt-[2rem]">
          {/*  <Logo /> */}
        </div>
        <div className="mt-[3rem]">
          <Container className="py-[4rem]">{children}</Container>
        </div>
      </BlurBackGround>
    </>
  );
}

function Logo() {
  return (
    <div className="opacity-90">
      <div className="flex">
        <h4 className="font-bold">SaveTheDevs</h4>
      </div>
    </div>
  );
}
