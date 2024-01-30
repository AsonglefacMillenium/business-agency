import { Text } from "@/components/atoms";
import React from "react";

const DetailsContent = ({ ...props }: DetailsContentProps) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <Text
        text={props.title}
        color="#0C0C0C"
        fontSize={"large"}
        fontWeight={"bold"}
      />
      <Text
        text={props.text1}
        color="#0C0C0C"
        fontSize={"normal"}
        fontWeight={"400"}
      />
      <Text
        text={props.text2}
        color="#0C0C0C"
        fontSize={"normal"}
        fontWeight={"400"}
      />
    </div>
  );
};

export default DetailsContent;
