import { ReactNode } from "react";
import { CaretUp } from "phosphor-react";

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function ScroolTopButton() {
  return (
    <div className="bg-surface-875 p-2.5 rounded-md cursor-pointer hover:bg-surface-850 items-center flex">
      <CaretUp
        weight="bold"
        onClick={scrollTop}
        size="90%"
        className="w-6 self-center opacity-70"
      />
    </div>
  );
}
