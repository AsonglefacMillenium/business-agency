import { Text } from "@/components/atoms";
import { Button } from "@/components/molecules";
import React from "react";

const PortfolioWork = () => {
  return (
    <div className="w-[70%] mx-auto bg-[#121212] gap-[24px] mb-[100px] flex flex-col items-center justify-center h-[289px] rounded-2xl mt-[67px]">
      <Text
        color="#FBFBFB"
        text="Enough talk, let’s get to work"
        fontSize={"XXlarge"}
        fontWeight={"bold"}
      />

      <div className="">
        <Button
          text="Get in touch"
          bgColor="#fff"
          color="#000"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default PortfolioWork;
