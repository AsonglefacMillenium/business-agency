import { Footer, HiroSection, MissionSection, ProcessSection, ServicesSection, ShowcaseSection, TestimonialSection } from "@/components/templates";
import React from "react";

const HomeScreen = () => {
  return (
    <div className="w-full p-0 m-0">
      <HiroSection />
      <ServicesSection />
      <MissionSection />
      <ProcessSection />
      <ShowcaseSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default HomeScreen;
