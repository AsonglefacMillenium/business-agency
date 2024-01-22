import { Header2 } from "@/components/organisms";
import { AboutLander, Footer, PortfolioLander, PortfolioShowcaseSection, PortfolioWork, StatsSection, TeamSection } from "@/components/templates";
import React from "react";

const AboutScreen = () => {
  return (
    <div className="w-full p-0 m-0 pt-[67px]">
      <Header2 />
      <AboutLander />
      <StatsSection />
      <TeamSection />
      <PortfolioWork />
      <Footer />
    </div>
  );
};

export default AboutScreen;
