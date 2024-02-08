import React from "react";

import MissionImage from "/images/mission.png";
import { Button } from "@/components/molecules";
import { Text } from "@/components/atoms";
import Image from "next/image";

const MissionSection = () => {
  return (
    <div className="w-full py-[100px] bg-[#0C0C0C]">
      <div className="lg:w-[80%] w-[90%] mx-auto flex lg:justify-between justify-center items-center">
        <div className="lg:w-[45%] lg:visible invisible">
          <Image alt="" width={500} height={500} src="/images/mission.png" className="w-full"/>
        </div>

        <div className="lg:w-[45%] w-[100%]  flex flex-col gap-8">
          <div className="w-full gap-[25px] flex flex-col">
            <Text
              color="#64CCC5"
              text="About Us"
              fontSize={"Xlarge"}
              fontWeight={"bold"}
            />

            <Text
              color="#F4F4F4"
              text="The core mission behind all our work"
              fontSize={"XXlarge"}
              fontWeight={"bold"}
            />

            <Text
              color="#F4F4F4"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit metus ut tortor purus tincidunt sed lectus ut eros, turpis tincidunt id."
              fontSize={"mega"}
              fontWeight={"400"}
            />

            <div className="w-full flex gap-[59px]">
              <div className="gap-[9px] flex flex-col">
                <Text
                  color="#64CCC5"
                  text="350 +"
                  fontSize={"Xlarge"}
                  fontWeight={"bold"}
                />

                <Text
                  color="#F4F4F4"
                  text="Companies helped"
                  fontSize={"small"}
                  fontWeight={"400"}
                />
              </div>
              <div className="gap-[9px] w-full flex flex-col">
                <Text
                  color="#64CCC5"
                  text="350 +"
                  fontSize={"Xlarge"}
                  fontWeight={"bold"}
                />

                <Text
                  color="#F4F4F4"
                  text="Revenue generated"
                  fontSize={"small"}
                  fontWeight={"400"}
                />
              </div>
            </div>
          </div>

          <div className="w-[40%]">
            <Button
              text="Start your Free Trial"
              color="#000"
              bgColor="#fff"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
