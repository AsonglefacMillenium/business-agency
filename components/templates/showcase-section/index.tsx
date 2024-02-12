import { Text } from "@/components/atoms";
import { Button, ProjectsCard } from "@/components/molecules";
import React from "react";

const ShowcaseSection = () => {
  return (
    <div className="w-full pt-[100px] mb-[93px] bg-white">
      <div className="lg:w-[80%] w-[90%] mx-auto flex flex-col items-center gap-[80px]">
        <div className="flex lg:w-[50%] w-full text-center flex-col gap-[24px] items-center">
          <Text
            text="Recent Showcase"
            color="#0C0C0C"
            fontSize={"XXlarge"}
            fontWeight={"bold"}
          />
        </div>

        <div className="w-full  mx-auto flex lg:flex-row flex-col flex-wrap gap-32 justify-center">
          <div className="flex lg:w-[40%] w-full flex-col gap-[50px]">
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

          <div className="flex flex-col lg:w-[40%] w-full gap-[50px] pt-[50px]">
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
