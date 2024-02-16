import React from "react";

import { Button } from "@/components/molecules";
import { Text } from "@/components/atoms";
import Image from "next/image";

const AboutLander = () => {
  return (
    <div className="w-full py-[100px] bg-[#fff]">
      <div className="lg:w-[80%] w-full mx-auto bg-[#0C0C0C] lg:pl-12 pl-5 lg:pt-[82px] py-10 flex flex-row-reverse rounded-2xl justify-between items-start">
        <div className="lg:w-[45%] lg:flex hidden mb-[-60px] z-2">
          <Image
            width={500}
            height={500}
            alt=""
            src="/images/mission.png"
            className="w-full"
          />
        </div>

        <div className="lg:w-[50%] w-full flex flex-col gap-8 ">
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

          <div className="lg:w-[40%] w-full">
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
