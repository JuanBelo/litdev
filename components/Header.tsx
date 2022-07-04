/* eslint-disable @next/next/no-img-element */

import { type } from "os";
import { CaretDown, SignIn } from "phosphor-react";

export function Header() {
  return (
    <>
      <div
        className="absolute
         w-full top-0 left-0
        h-fit"
      >
        <div
          className="
            max-w-6xl m-auto
          "
        >
          <div className="flex">
            <h4 className="font-bold">
              <span className="text-brand-litdev-600">&lt;</span>LitDev&nbsp;
            </h4>
            <h4 className="font-bold"></h4>
            <h4 className="font-bold">
              <span className="text-brand-litdev-500">/</span>
              <span className="text-brand-litdev-600">&gt;</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
