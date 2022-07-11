import { Background } from "components/Background";
import { GetEmail } from "components/GetEmail";
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
  SearchMentor,
  Mentor,
} from "../components";

const Home: NextPage = () => {
  return (
    <NonSSRWrapper>
      <main>
        <Background>
          <div className="flex flex-col gap-[7rem]">
            <Hero />
            <SearchMentor />
            <Mentor />
            <GetEmail />
            <Social />
          </div>
        </Background>
      </main>
    </NonSSRWrapper>
  );
};

export default Home;
