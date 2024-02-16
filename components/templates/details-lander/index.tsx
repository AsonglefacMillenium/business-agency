import { DetailsCard } from "@/components/organisms";
import Image from "next/image";
import React from "react";

const DetailsLander = () => {
  return (
    <div className="w-full bg-white py-[35px] mb-[100px]">
      <div className="lg:w-[70%] w-full mx-auto  relative">
        <div className="w-full rounded-2xl h-[590px]">
          <Image
            src={"/images/image4.jpeg"}
            alt=""
            width={600}
            height={600}
            className="rounded-2xl w-full h-full"
          />
        </div>

        <div className="w-full flex flex-wrap absolute bottom-[8%] lg:bottom-[0%] mb-[-30px] z-20 justify-center items-center gap-[45px]">
          <DetailsCard text="Cloud solution" title="Category:" />
          <DetailsCard text="BrightMedia Solutions" title="Client" />
          <DetailsCard text="August 23, 2023" title="Date:" />
          <DetailsCard text="489 Depot Road Midland" title="Location:" />
        </div>
      </div>
    </div>
  );
};

export default DetailsLander;
