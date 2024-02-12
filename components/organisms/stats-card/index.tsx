import { Text } from "@/components/atoms";
import React from "react";

const StatsCard = ({...props}: StatsCardProps) => {
  return (
    <div className="lg:w-[422px] w-full p-[45px] flex flex-col gap-[15px] justify-center items-center ">
      <Text
        color="#0C0C0C"
        text={props.data}
        fontSize={"XXlarge"}
        fontWeight={"bold"}
      />

      <Text
        color="#0C0C0C"
        text={props.title}
        fontSize={"mega"}
        fontWeight={"semiBold"}
      />

      <div className="w-full text-center">
        <Text
          color="#0C0C0C"
          text={props.text}
          fontSize={"normal"}
          fontWeight={"400"}
        />
      </div>
    </div>
  );
};

export default StatsCard;
