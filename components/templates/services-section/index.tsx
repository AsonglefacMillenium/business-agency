import { Text } from "@/components/atoms";
import { PenIcon, TorchIcon } from "@/components/atoms/icons";
import { ServicesCard } from "@/components/molecules";
import React from "react";

const ServicesSection = () => {
  return (
    <div className="w-full pt-[100px] mb-[93px] bg-white">
      <div className="w-[80%] mx-auto flex flex-col items-center gap-[80px]">
        <div className="flex w-[50%] text-center flex-col gap-[24px] items-center">
          <Text
            text="Our Services"
            color="#64CCC5"
            fontSize={"Xlarge"}
            fontWeight={"bold"}
          />

          <div className="text-center"></div>

          <Text
            text="High-impact services for your business"
            color="#0C0C0C"
            fontSize={"XXlarge"}
            fontWeight={"bold"}
          />
        </div>

        <div className="w-full flex flex-wrap gap-[66px]">
          <ServicesCard
            title="Content Marketing "
            text="Our team creates engaging and shareable content that resonates with your audience, drives organic traffic"
            icon={<TorchIcon />}
          />

          <ServicesCard
            title="Content Marketing "
            text="Our team creates engaging and shareable content that resonates with your audience, drives organic traffic"
            icon={<TorchIcon />}
          />

          <ServicesCard
            title="Content Marketing "
            text="Our team creates engaging and shareable content that resonates with your audience, drives organic traffic"
            icon={<TorchIcon />}
          />

          <ServicesCard
            title="Content Marketing "
            text="Our team creates engaging and shareable content that resonates with your audience, drives organic traffic"
            icon={<TorchIcon />}
          />

          <ServicesCard
            title="Content Marketing "
            text="Our team creates engaging and shareable content that resonates with your audience, drives organic traffic"
            icon={<TorchIcon />}
          />

          <ServicesCard
            title="Content Marketing "
            text="Our team creates engaging and shareable content that resonates with your audience, drives organic traffic"
            icon={<TorchIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
