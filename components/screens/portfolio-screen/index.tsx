import { Header2 } from "@/components/organisms";
import { Footer, PortfolioLander, PortfolioShowcaseSection, PortfolioWork } from "@/components/templates";
import React from "react";

const PortfolioScreen = () => {
  return (
    <div className="w-full p-0 m-0 pt-[67px]">
        <Header2 />
        <PortfolioLander />
      <PortfolioShowcaseSection />
      <PortfolioWork />
      <Footer />
    </div>
  );
};

export default PortfolioScreen;
