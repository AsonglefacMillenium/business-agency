import { Text } from "@/components/atoms";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/atoms/icons";
import React from "react";

const TeamCard = ({ ...props }: TeamCardProps) => {
  return (
    <div className="flex flex-col w-[419px] gap-[16px] h-fit relative cursor-pointer">
      <div className="w-full h-[450px] rounded-xl">
        <img src={props.image} alt="" className="w-full h-[450px] rounded-xl" />
      </div>

      <div className="w-full  flex flex-col gap-[10px]">
        <Text
          text={props.title}
          color=""
          fontSize={"Xlarge"}
          fontWeight={"bold"}
        />
        <Text
          text={props.text}
          color=""
          fontSize={"normal"}
          fontWeight={"400"}
        />
      </div>

      <div className="w-fit flex gap-[28px] absolute top-[5%] right-[5%]">
            <div className="bg-[#FBFBFB] w-[35px] h-[35px] flex items-center justify-center rounded-[100%] cursor-pointer">
              <FacebookIcon />
            </div>

            <div className="bg-[#FBFBFB] w-[35px] h-[35px] flex items-center justify-center rounded-[100%] cursor-pointer">
              <InstagramIcon />
            </div>

            <div className="bg-[#FBFBFB] w-[35px] h-[35px] flex items-center justify-center rounded-[100%] cursor-pointer">
              <LinkedinIcon />
            </div>
          </div>
    </div>
  );
};

export default TeamCard;
