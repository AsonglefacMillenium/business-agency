import { Text } from "@/components/atoms";
import { Button, ProjectsCard } from "@/components/molecules";
import React from "react";

const ShowcaseSection = () => {
  return (
    <div className="w-full pt-[100px] mb-[93px] bg-white">
      <div className="w-[80%] mx-auto flex flex-col items-center gap-[80px]">
        <div className="flex w-[50%] text-center flex-col gap-[24px] items-center">
          <Text
            text="Recent Showcase"
            color="#0C0C0C"
            fontSize={"XXlarge"}
            fontWeight={"bold"}
          />
        </div>

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
          </div>

          <div className="flex flex-col gap-[50px] pt-[50px]">
            <div className="self-end">
              <Button
                text="Start your Free Trial"
                bgColor="#000"
                color="#fff"
                onClick={() => {}}
              />
            </div>

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

export default ShowcaseSection;
