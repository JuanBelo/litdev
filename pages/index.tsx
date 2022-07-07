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
      <div className="backgroundFull">
        <Hero />
        <First />
        {/* <Social /> */}
      </div>
    </NonSSRWrapper>
  );
};

export default Home;
