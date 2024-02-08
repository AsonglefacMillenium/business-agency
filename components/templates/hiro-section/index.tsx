import { Text } from "@/components/atoms";
import {
  AutomationIcon,
  GreenichIcon,
  LeafeIcon,
  MindfulnessIcon,
} from "@/components/atoms/icons";
import { Button } from "@/components/molecules";
import { Header } from "@/components/organisms";
import Image from "next/image";
import React from "react";

const HiroSection = () => {
  return (
    <div className="w-full bg-[#0C0C0C] pt-[23px] pb-[89px]">
      <div className="lg:w-[80%] w-[90%] mx-auto">
        <Header />

        <div className="w-full flex mt-[100px] justify-between items-start">
          <div className="lg:w-[40%] w-full lg:pt-[200px] pt-[100px]">
            <div className="w-full flex flex-col gap-4">
              <Text
                text="Ready to take your"
                color="#fff"
                fontSize={"XXlarge"}
                fontWeight={"bold"}
              />
              <Text
                text="Business Growth"
                color="#64CCC5"
                fontSize={"XXlarge"}
                fontWeight={"bold"}
              />
              <Text
                text="to the next level?"
                color="#fff"
                fontSize={"XXlarge"}
                fontWeight={"bold"}
              />
              <Text
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero egestas malesuada viverra gravida libero cursus nulla leo pulvinar."
                color="#FBFBFB"
                fontSize={"normal"}
                fontWeight={"400"}
              />

              <div className="w">
                <Button
                  text="Start your Free Trial"
                  bgColor="#fff"
                  color="#000"
                  onClick={() => {}}
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-2 mt-[160px]">
              <Text
                text="Trusted by Leading Brands"
                color="#64CCC5"
                fontSize={"large"}
                fontWeight={"bold"}
              />

              <div className="flex justify-between w-full items-center">
                <GreenichIcon />
                <AutomationIcon />
                <LeafeIcon />
                <MindfulnessIcon />
              </div>
            </div>
          </div>

          <div className="lg:w-[60%] lg:visible invisible">
            <Image
              className="w-full"
              src={"/images/hiro_image.png"}
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiroSection;
