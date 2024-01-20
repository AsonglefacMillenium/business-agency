import { Text } from "@/components/atoms";
import { Button, ProjectsCard } from "@/components/molecules";
import React from "react";

const PortfolioShowcaseSection = () => {
  return (
    <div className="w-full pt-[100px] mb-[93px] bg-white">
      <div className="w-[80%] mx-auto flex flex-col items-center gap-[80px]">
        <div className="w-fit mx-auto flex flex-wrap gap-[66px]">
          <div className="flex flex-col gap-[50px]">
            <ProjectsCard
              text="Creative  UI design"
              title="Web UI design"
              image="/images/image1.jpeg"
            />
            <ProjectsCard
              text="Creative  UI design"
              title="Web UI design"
              image="/images/image1.jpeg"
            />

            <ProjectsCard
              text="Creative  UI design"
              title="Web UI design"
              image="/images/image1.jpeg"
            />
          </div>

          <div className="flex flex-col gap-[50px] ">
            <ProjectsCard
              text="Creative  UI design"
              title="Web UI design"
              image="/images/image1.jpeg"
            />
            <ProjectsCard
              text="Creative  UI design"
              title="Web UI design"
              image="/images/image1.jpeg"
            />

            <ProjectsCard
              text="Creative  UI design"
              title="Web UI design"
              image="/images/image1.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioShowcaseSection;
