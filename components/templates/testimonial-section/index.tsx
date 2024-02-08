import { Text } from "@/components/atoms";
import {
  ArrowLeftBlackIcon,
  ArrowRightBlackIcon,
} from "@/components/atoms/icons";
import Image from "next/image";
import React from "react";

const TestimonialSection = () => {
  return (
    <div className="w-full bg-white mb-[93px]">
      <div className="lg:w-[50%] w-[90%] flex flex-col gap-[21px] items-center mx-auto">
        <div className="flex flex-col items-center gap-[35px] text-center">
          <div className="w-[100px]">
            <Image alt="" height={500} width={500} src="/images/profile.png" className="w-full" />
          </div>

          <div className="">
            <Text
              text="“Be genuine in your assessment, and provide constructive feedback to benefit both potential customers and the company providing the product or service.”"
              color="#0C0C0C"
              fontSize={"large"}
              fontWeight={"bold"}
            />

           
          </div>
          <div className="flex flex-col gap-[5px] items-center">
          <Text
              text="Jacqueline Miller"
              color="#0C0C0C"
              fontSize={"large"}
              fontWeight={"bold"}
            />
            <Text
              text="CEO of an eduport"
              color="#0C0C0C"
              fontSize={"normal"}
              fontWeight={"400"}
            />
          </div>
        </div>

        <div className="flex gap-[11px] items-center">
          <ArrowLeftBlackIcon />
          <ArrowRightBlackIcon />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
