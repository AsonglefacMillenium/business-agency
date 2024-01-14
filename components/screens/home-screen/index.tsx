import { HiroSection, ProcessSection, ServicesSection } from "@/components/templates";
import React from "react";

const HomeScreen = () => {
  return (
    <div className="w-full p-0 m-0">
      <HiroSection />
      <ServicesSection />
      <ProcessSection />
    </div>
  );
};

export default HomeScreen;
