import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Social, Hero, Header, WhatIs, WaitingList } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <WhatIs />
      <WaitingList />
      <Social />
    </div>
  );
};

export default Home;
