import { Text } from "@/components/atoms";
import { Button } from "@/components/molecules";
import Link from "next/link";
import React from "react";

const Header2 = () => {
  return (
    <div className="flex justify-between lg:w-[80%] w-[90%] mx-auto mt-0">
      <div>
        <Text
          text="AGENCY"
          color="#000"
          fontSize={"Xlarge"}
          fontWeight={"bold"}
        />
      </div>
      <div className="gap-[30px] hidden lg:flex">
        <Link href={"/"}>
          <Text
            color="#000"
            text="Home"
            fontSize={"normal"}
            fontWeight={"400"}
          />
        </Link>

        <Link href={"/about"}>
          <Text
            color="#000"
            text="About"
            fontSize={"normal"}
            fontWeight={"400"}
          />
        </Link>

        <Link href={"/contact"}>
          <Text
            color="#000"
            text="Contact Us"
            fontSize={"normal"}
            fontWeight={"400"}
          />
        </Link>
      </div>

      <Link href={""} className="hidden lg:flex">
        <Button
          text="Get in touch"
          bgColor="#000"
          color="#fff"
          onClick={() => {}}
        />
      </Link>
    </div>
  );
};

export default Header2;
