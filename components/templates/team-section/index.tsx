import { Text } from "@/components/atoms";
import { TeamCard } from "@/components/organisms";
import React from "react";

const TeamSection = () => {
  return (
    <div className="w-full mt-[100px]">
      <div className="lg:w-[80%] md:w-[90%] w-full mx-auto flex flex-col items-center gap-[80px]">
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
            image="/images/social1.png"
          />
          <TeamCard
            title="Esther Howards"
            text="Founder & CEO"
            image="/images/social2.png"
          />
          <TeamCard
            title="Esther Howards"
            text="Founder & CEO"
            image="/images/social3.png"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
