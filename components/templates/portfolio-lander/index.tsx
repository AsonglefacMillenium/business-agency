import { Text } from "@/components/atoms";
import { Button } from "@/components/molecules";
import React from "react";

const PortfolioLander = () => {
  return (
    <div className="lg:w-[70%] w-[95%] mx-auto bg-[#0C0C0C] flex items-center justify-center h-[350px] rounded-2xl mt-[67px]">
      <Text
        color="#FBFBFB"
        text="Our Portfolio"
        fontSize={"XXlarge"}
        fontWeight={"bold"}
      />
    </div>
  );
};

export default PortfolioLander;
