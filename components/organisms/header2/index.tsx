import { Text } from "@/components/atoms";
import { Button } from "@/components/molecules";
import Link from "next/link";
import React, { useState } from "react";
import { MdCancel, MdMenu } from "react-icons/md";

const Header2 = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex justify-between lg:w-[80%] w-[90%] mx-auto mt-0">
      <div>
        <Link href={"/"}>
          <Text
            text="AGENCY"
            color="#000"
            fontSize={"Xlarge"}
            fontWeight={"bold"}
          />
        </Link>
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

      <div className="flex lg:hidden">
        {!menu && (
          <MdMenu
            className="text-[#000] text-3xl pointer"
            onClick={() => setMenu(true)}
          />
        )}
      </div>

      {menu && (
        <div
          className="w-full lg:hidden h-screen fixed right-0 top-0 flex justify-between pr-3 "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <div className="w-[50%] flex flex-col bg-white h-screen px-5 py-20 gap-16">
            <div className="lg:flex lg:hidden gap-16 flex flex-col w-full items-center">
              <Link href={"/"}>
                <Text
                  color="#000"
                  text="Home"
                  fontSize={"large"}
                  fontWeight={"400"}
                />
              </Link>

              <Link href={"/about"}>
                <Text
                  color="#000"
                  text="About"
                  fontSize={"large"}
                  fontWeight={"400"}
                />
              </Link>

              <Link href={"/contact"}>
                <Text
                  color="#000"
                  text="Contact Us"
                  fontSize={"large"}
                  fontWeight={"400"}
                />
              </Link>
            </div>

            <Link href={"/contact"} className="lg:hidden flex flex-col">
              <Button
                text="Get in touch"
                bgColor="#000"
                color="#fff"
                onClick={() => {}}
              />
            </Link>
          </div>

          <MdCancel
            className="text-white text-3xl"
            onClick={() => setMenu(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Header2;
