import { Text } from "@/components/atoms";
import { TorchIcon } from "@/components/atoms/icons";
import React from "react";

const ServicesCard = ({ ...props }: IServiceProps) => {
  return (
    <div className="flex flex-col gap-[62px] p-[45px] w-[400px]">
      <div className="w-full ">{props.icon}</div>
      <div className="flex flex-col w-full gap-4">
        <Text
          text={props.title}
          color="#000"
          fontWeight={"bold"}
          fontSize={"large"}
        />
        <Text
          text={props.text}
          color="#000"
          fontWeight={"semiBold"}
          fontSize={"normal"}
        />
      </div>
    </div>
  );
};

export default ServicesCard;
