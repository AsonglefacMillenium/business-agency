import { Text } from "@/components/atoms";
import React from "react";

const RecentSection = () => {
  return (
    <div className="w-full flex-col justify-center items-center">
      <div className="">
        <Text
          text="Recent Showcase"
          color="#0C0C0C"
          fontSize={"XXlarge"}
          fontWeight={"bold"}
        />
      </div>
    </div>
  );
};

export default RecentSection;
