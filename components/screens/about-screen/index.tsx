import { Header2 } from "@/components/organisms";
import { AboutLander, Footer, PortfolioLander, PortfolioShowcaseSection, PortfolioWork, StatsSection, TeamSection } from "@/components/templates";
import React from "react";

const AboutScreen = () => {
  return (
    <div className="w-screen p-0 m-0 lg:pt-[20px]">
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
