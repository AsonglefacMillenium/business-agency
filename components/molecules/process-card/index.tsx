import { Text } from "@/components/atoms";
import React from "react";

const ProcessCard = ({ ...props }: ProcessCardProps) => {
  return (
    <div className="flex w-[345px] flex-col gap-4 px-[40px] pb-[40px] bg-white">
      <div className="w-full flex justify-center items-center gap-[32px] pl-[20px] ">
        <div>{props.icon}</div>
        <Text
          text={props.title}
          fontSize={"Xlarge"}
          fontWeight={"bold"}
          color="#000"
        />
      </div>

      <div className="w-full pr-8">
        <Text
          text={props.text}
          fontSize={"small"}
          fontWeight={"semiBold"}
          color="#000"
        />
      </div>
    </div>
  );
};

export default ProcessCard;
