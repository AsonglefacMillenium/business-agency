import { Text } from "@/components/atoms";
import { DetailsImageCard, RecentProjectCard } from "@/components/molecules";
import React from "react";

const DetailsImageSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[80px] mb-[100px]">
      <div className="w-[80%] flex items-center justify-center flex-wrap gap-[74px]">
        <DetailsImageCard image="/images/image1.jpeg" />
        <DetailsImageCard image="/images/image1.jpeg" />
        <DetailsImageCard image="/images/image1.jpeg" />
      </div>
    </div>
  );
};

export default DetailsImageSection;
