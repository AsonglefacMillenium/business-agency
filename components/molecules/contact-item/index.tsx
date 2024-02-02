import { Text } from "@/components/atoms";
import React from "react";

const ContactItem = ({...props}: ContactItemProps) => {
  return (
    <div className="flex justify-center items-center gap-[26px]">
      <div className="">{props.icon}</div>
      <div className="flex flex-col gap-[2px]">
        <Text
          text={props.title}
          color="#0C0C0C"
          fontSize={"large"}
          fontWeight={"bold"}
        />

        <Text
          text={props.text}
          color="#0C0C0C"
          fontSize={"normal"}
          fontWeight={"400"}
        />
      </div>
    </div>
  );
};

export default ContactItem;
