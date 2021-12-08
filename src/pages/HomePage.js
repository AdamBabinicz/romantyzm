import React from "react";
import Clients from "../components/Clients/Client";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import { heroOne, heroTwo, heroThree, heroFour } from "../data/HeroData";
import Content from "../components/Content/Content";
import { Heading } from "../globalStyles";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
      <Heading id="projects">Najważniejsze utwory</Heading>
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Content {...heroFour} />
    </>
  );
};

export default HomePage;
