import { Text } from "@/components/atoms";
import { TeamCard } from "@/components/organisms";
import React from "react";

const TeamSection = () => {
  return (
    <div className="w-full mt-[100px]">
      <div className="w-[70%] mx-auto flex flex-col items-center gap-[80px]">
        <div className="text-center w-fit">
          <Text
            text="Our team"
            color="#0C0C0C"
            fontSize={"XXlarge"}
            fontWeight={"bold"}
          />
        </div>

        <div className="w-full flex items-center justify-between">
            <TeamCard title="" text="" image="" />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;