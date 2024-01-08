"use client";
import { Text } from "@/components/atoms";
import { TorchIcon } from "@/components/atoms/icons";
import { Button, ServicesCard } from "@/components/molecules";

export default function Home() {
  return (
    <main className="bg-black">
      <Text
        color="red"
        fontSize="Xlarge"
        fontWeight="bold"
        text="Hello world"
      />
      <Button
        text="Get in touch"
        color="#000"
        bgColor="#fff"
        onClick={() => {}}
      />

      <div className="w-full bg-white">
        <ServicesCard
          text="Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate."
          title="Graphics Design"
          icon={<TorchIcon />}
        />
      </div>
    </main>
  );
}
