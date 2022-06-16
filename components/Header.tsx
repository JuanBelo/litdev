/* eslint-disable @next/next/no-img-element */

import { type } from "os";
import { CaretDown, SignIn } from "phosphor-react";

export function Header() {
  return (
    <>
      <header
        className="
          bg-surface-900 border-b-[1px] border-surface-875 h-[5.5rem] w-full fixed top-0 left-0 z-20 shadow-md
        "
      >
        <div
          className="
            max-w-6xl m-auto h-full flex justify-between items-center px-6
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

          <div className="items-center gap-4 hidden lg:flex">
            <a
              href="https://community.gonew.co/auth/login"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center justify-center uppercase  font-bold gap-2 border-0 py-2 px-4 rounded-md text-sm"
            >
              <SignIn
                weight="bold"
                className="text-brand-litdev-500"
                size={16}
              />
              Entrar
            </a>
            <a
              href="https://community.gonew.co/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase py-2 px-4 rounded-[5px] text-sm font-bold border-2 border-brand-litdev-500 text-surface-100 hover:brightness-90 transition"
            >
              Criar conta
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
