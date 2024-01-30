import { Text } from "@/components/atoms";
import { RecentProjectCard } from "@/components/molecules";
import React from "react";

const RecentSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[80px] mb-[100px]">
      <div className="w-fit ">
        <Text
          text="Recent Projects"
          color="#0C0C0C"
          fontSize={"XXlarge"}
          fontWeight={"bold"}
        />
      </div>

      <div className="w-[80%] flex items-center justify-center flex-wrap gap-[47px]">
        <RecentProjectCard
          text="Creative  UI design"
          title="Web UI design"
          image="/images/image1.jpeg"
        />
        <RecentProjectCard
          text="Creative  UI design"
          title="Web UI design"
          image="/images/image1.jpeg"
        />
        <RecentProjectCard
          text="Creative  UI design"
          title="Web UI design"
          image="/images/image1.jpeg"
        />
      </div>
    </div>
  );
};

export default RecentSection;
