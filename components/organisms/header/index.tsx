import React, { useState } from "react";
import { Text } from "@/components/atoms";
import { Button } from "@/components/molecules";
import Link from "next/link";
import { MdCancel, MdMenu } from "react-icons/md";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex justify-between w-full">
      <div>
        <Link href={"/"}>
          <Text
            text="AGENCY"
            color="#fff"
            fontSize={"Xlarge"}
            fontWeight={"bold"}
          />
        </Link>
      </div>
      <div className="lg:flex lg:flex gap-[30px] hidden">
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

        <Link href={"/portfolio"}>
          <Text
            color="#FBFBFB"
            text="Portfolio"
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

      <Link href={""} className="lg:flex hidden">
        <Button
          text="Get in touch"
          bgColor="#fff"
          color="#000"
          onClick={() => {}}
        />
      </Link>

      <div className="flex lg:hidden">
        {!menu && (
          <MdMenu
            className="text-white text-3xl pointer"
            onClick={() => setMenu(true)}
          />
        )}
      </div>

      {menu && (
        <div
          className="w-full lg:hidden h-screen fixed right-0 top-0 flex justify-between pr-3 "
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <div className="w-[70%] flex flex-col bg-white h-screen px-5 py-20 gap-16">
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

              <Link href={"/portfolio"}>
                <Text
                  color="#000"
                  text="Portfolio"
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

export default Header;
