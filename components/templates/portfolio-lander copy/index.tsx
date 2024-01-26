import { Text } from "@/components/atoms";
import React from "react";

const PortfolioLander = () => {
  return (
    <div className="w-[70%] mx-auto bg-[#0C0C0C] flex items-center justify-center h-[350px] rounded-2xl mt-[67px]">
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
