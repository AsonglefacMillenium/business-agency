import React from "react";


import { Button } from "@/components/molecules";
import { Text } from "@/components/atoms";

const AboutLander = () => {
  return (
    <div className="w-full py-[100px] bg-[#fff]">
      <div className="w-[80%] mx-auto  bg-[#0C0C0C] pl-12 pt-[82px] flex flex-row-reverse rounded-2xl justify-between items-start">
        <div className="w-[45%] mb-[-60px] z-2">
          <img src="/images/mission.png" />
        </div>

        <div className="w-[45%] flex flex-col gap-8 pl-8 pt-[82px]">
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
              <div className="gap-[9px] flex flex-col">
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

export default AboutLander;
