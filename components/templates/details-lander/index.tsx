import Image from "next/image";
import React from "react";

const DetailsLander = () => {
  return (
    <div className="w-full bg-white py-[35px]">
      <div className="w-[70%] mx-auto  relative">
        <div className="w-full rounded-2xl h-[590px]">
          <Image
            src={"/images/image4.jpeg"}
            alt=""
            width={600}
            height={600}
            className="rounded-2xl w-full h-full"
          />
        </div>

        <div className="w-full flex absolute bottom-[5%] mb-[-30px] z-20 bg-[red] justify-center items-center gap-[45px]">

        </div>
      </div>
    </div>
  );
};

export default DetailsLander;
