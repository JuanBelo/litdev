import { ClockCounterClockwise } from "phosphor-react";

export function EarlyAccessButton() {
  return (
    <div>
      <div
        style={{ boxShadow: "0px 4px 140px rgba(0, 0, 0, 0.68)" }}
        className="cursor-pointer flex gap-2 w-fit bg-brand-litdev-625 px-6 py-3 rounded-full items-center hover:opacity-90 "
      >
        <h4 className="text-sm md:text-lg font-medium font-inter tracking-wide ">
          Early Access
        </h4>
        <ClockCounterClockwise className="text-sm md:text-lg" />
      </div>
    </div>
  );
}
