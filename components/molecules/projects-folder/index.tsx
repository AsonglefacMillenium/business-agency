import { Text } from "@/components/atoms";
import Image from "next/image";
import React from "react";

const ProjectsCard = ({ ...props }: ProjectsCardProps) => {
  return (
    <div className="flex flex-col w-[500px] gap-4 h-fit">
      <div className="w-full h-[450px] rounded-xl">
        <Image width={500} height={500} src={props.image} alt="" className="w-full h-[450px] rounded-xl" />
      </div>

      <div className="w-full  flex flex-col gap-2">
        <Text text={props.title} color="" fontSize={"Xlarge"} fontWeight={"bold"} />
        <Text text={props.text} color="" fontSize={"normal"} fontWeight={"400"} />
      </div>
    </div>
  );
};

export default ProjectsCard;
