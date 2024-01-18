import { Footer, HiroSection, ProcessSection, ServicesSection, ShowcaseSection, TestimonialSection } from "@/components/templates";
import React from "react";

const HomeScreen = () => {
  return (
    <div className="w-full p-0 m-0">
      <HiroSection />
      <ServicesSection />
      <ProcessSection />
      <ShowcaseSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default HomeScreen;
