import { Text } from "@/components/atoms";
import { Button } from "@/components/molecules";
import Link from "next/link";
import React from "react";

const Header2 = () => {
  return (
    <div className="flex justify-between w-[70%] mx-auto">
      <div>
        <Text
          text="AGENCY"
          color="#000"
          fontSize={"Xlarge"}
          fontWeight={"bold"}
        />
      </div>
      <div className="flex gap-[30px]">
        <Link href={""}>
          <Text
            color="#000"
            text="Home"
            fontSize={"normal"}
            fontWeight={"400"}
          />
        </Link>

        <Link href={""}>
          <Text
            color="#000"
            text="About"
            fontSize={"normal"}
            fontWeight={"400"}
          />
        </Link>

        <Link href={""}>
          <Text
            color="#000"
            text="Contact Us"
            fontSize={"normal"}
            fontWeight={"400"}
          />
        </Link>
      </div>

      <Link href={""}>
        <Button text="Get in touch" bgColor="#fff" color="#000" onClick={() => {}} />
      </Link>
    </div>
  );
};

export default Header2;
