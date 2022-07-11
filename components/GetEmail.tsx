import { ClockCounterClockwise, X } from "phosphor-react";
import React from "react";
import { Container, EarlyAccessButton } from "./utils";
import { BlurBox } from "./utils/BlurBox";

export function GetEmail() {
  return (
    <div className=" flex flex-col justify-start items-start gap-6">
      <input
        type="Email"
        className="font-inter text-start w-fit text-2xl bg-transparent shadow-sm focus:outline-none"
        placeholder="Enter your email"
      />
      <div
        style={{ boxShadow: "0px 4px 140px rgba(0, 0, 0, 0.68)" }}
        className="cursor-pointer flex gap-2 w-fit bg-white px-6 py-3 rounded-full items-start hover:opacity-90 "
      >
        <p className="text-sm md:text-lg font-medium font-inter text-black">
          Early Access
        </p>
      </div>
    </div>
  );
}
