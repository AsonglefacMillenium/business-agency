import { HiroSection, ProcessSection, ServicesSection, ShowcaseSection } from "@/components/templates";
import React from "react";

const HomeScreen = () => {
  return (
    <div className="w-full p-0 m-0">
      <HiroSection />
      <ServicesSection />
      <ProcessSection />
      <ShowcaseSection />
    </div>
  );
};

export default HomeScreen;
