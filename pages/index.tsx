import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Social, Hero, Header } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Social />
    </div>
  );
};

export default Home;
