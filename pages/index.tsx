import { Background } from "components/Background";
import NonSSRWrapper from "components/utils/NonSSRWrapper";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Social,
  Hero,
  Header,
  WhatIs,
  WaitingList,
  First,
} from "../components";

const Home: NextPage = () => {
  return (
    <NonSSRWrapper>
      <main>
        <Background>
          <div className="flex flex-col gap-[7rem]">
            <Hero />
            <First />

            <Social />
          </div>
        </Background>
      </main>
    </NonSSRWrapper>
  );
};

export default Home;
