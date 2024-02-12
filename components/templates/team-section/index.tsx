import { Text } from "@/components/atoms";
import { TeamCard } from "@/components/organisms";
import React from "react";

const TeamSection = () => {
  return (
    <div className="w-full mt-[100px]">
      <div className="w-[80%] mx-auto flex flex-col items-center gap-[80px]">
        <div className="text-center w-fit">
          <Text
            text="Our team"
            color="#0C0C0C"
            fontSize={"XXlarge"}
            fontWeight={"bold"}
          />
        </div>

        <div className="w-full flex lg:flex-row flex-col  items-center justify-between ">
          <TeamCard
            title="Esther Howards"
            text="Founder & CEO"
            image="/images/image1.jpeg"
          />
          <TeamCard
            title="Esther Howards"
            text="Founder & CEO"
            image="/images/image1.jpeg"
          />
          <TeamCard
            title="Esther Howards"
            text="Founder & CEO"
            image="/images/image1.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
