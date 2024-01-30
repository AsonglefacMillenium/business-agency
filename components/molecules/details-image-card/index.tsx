import { Text } from "@/components/atoms";
import Image from "next/image";
import React from "react";

const DetailsImageCard = ({ ...props }: DetailsImageCardProps) => {
  return (
    <div className="flex flex-col w-[417px] gap-4 h-fit">
      <div className="w-full h-[490px] rounded-xl">
        <Image
          width={500}
          height={500}
          src={props.image}
          alt=""
          className="w-full h-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default DetailsImageCard;
