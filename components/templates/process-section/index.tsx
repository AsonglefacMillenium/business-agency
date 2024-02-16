import { Text } from "@/components/atoms";
import { PenIcon, TorchIcon } from "@/components/atoms/icons";
import { ProcessCard, ServicesCard } from "@/components/molecules";
import React from "react";

const ProcessSection = () => {
  return (
    <div className="w-full pt-[100px] mb-[93px] bg-white">
      <div className="lg:w-[80%] w-[90%] mx-auto flex flex-col items-center gap-[80px]">
        <div className="flex lg:w-[50%] w-full text-center flex-col gap-[24px] items-center">
          <Text
            text="Process"
            color="#64CCC5"
            fontSize={"Xlarge"}
            fontWeight={"bold"}
          />

          <Text
            text="Process that moves things forward"
            color="#0C0C0C"
            fontSize={"XXlarge"}
            fontWeight={"bold"}
          />
        </div>

        <div className="w-full flex flex-wrap gap-[40px]">
          <ProcessCard
            title="Content Marketing "
            text="Our team creates engaging and shareable content that resonates with your audience, drives organic traffic"
            icon={<TorchIcon />}
          />

          <ProcessCard
            title="Content Marketing "
            text="Our team creates engaging and shareable content that resonates with your audience, drives organic traffic"
            icon={<TorchIcon />}
          />

          <ProcessCard
            title="Content Marketing "
            text="Our team creates engaging and shareable content that resonates with your audience, drives organic traffic"
            icon={<TorchIcon />}
          />

          <ProcessCard
            title="Content Marketing "
            text="Our team creates engaging and shareable content that resonates with your audience, drives organic traffic"
            icon={<TorchIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
