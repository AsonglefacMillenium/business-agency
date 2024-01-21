import { Text } from "@/components/atoms";
import { Button } from "@/components/molecules";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <div>
        <Text
          text="AGENCY"
          color="#fff"
          fontSize={"Xlarge"}
          fontWeight={"bold"}
        />
      </div>
      <div className="flex gap-[30px]">
        <Link href={"/"}>
          <Text
            color="#FBFBFB"
            text="Home"
            fontSize={"normal"}
            fontWeight={"400"}
          />
        </Link>

        <Link href={"/about"}>
          <Text
            color="#FBFBFB"
            text="About"
            fontSize={"normal"}
            fontWeight={"400"}
          />
        </Link>

        <Link href={"/contact"}>
          <Text
            color="#FBFBFB"
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

export default Header;
