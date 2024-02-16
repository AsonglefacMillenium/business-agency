import { Text } from "@/components/atoms";
import React from "react";
import { pageData, utilityPageData } from "./footer.data";
import Link from "next/link";
import { SearchBox } from "@/components/molecules";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/atoms/icons";

const Footer = () => {
  return (
    <div className="w-full bg-[#0C0C0C] pt-[100px] pb-[60px]">
      <div className="lg:w-[80%] w-[90%] mx-auto flex flex-col gap-[100px] ">
        <div className="w-full flex flex-col lg:flex-row justify-between flex-wrap">
          <div className="lg:w-[20%] w-full flex flex-col gap-[24px]">
            <Text
              text="AGENCY"
              color="#fff"
              fontSize={"Xlarge"}
              fontWeight={"bold"}
            />

            <Text
              text="We’re a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful."
              color="#fff"
              fontSize={"normal"}
              fontWeight={"400"}
            />
          </div>

          <div className="flex flex-col gap-[24px]">
            <Text
              text="Pages"
              color="#fff"
              fontSize={"large"}
              fontWeight={"400"}
            />

            <div className="flex flex-col gap-[16px]">
              {pageData.map((data) => (
                <Link href={data.route} key={data.text}>
                  <Text
                    text={data.text}
                    color="#F4F4F4"
                    fontSize={"small"}
                    fontWeight={"400"}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[24px]">
            <Text
              text="Pages"
              color="#fff"
              fontSize={"large"}
              fontWeight={"400"}
            />

            <div className="flex flex-col gap-[16px]">
              {utilityPageData.map((data) => (
                <Link href={data.route} key={data.text}>
                  <Text
                    text={data.text}
                    color="#F4F4F4"
                    fontSize={"small"}
                    fontWeight={"400"}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[19px] w-full lg:w-[25%]">
            <Text
              text="Subscribe"
              color="#F4F4F4"
              fontSize={"large"}
              fontWeight={"bold"}
            />
            <SearchBox />
          </div>
        </div>

        <div className="w-full flex flex-col gap-[24px] items-center">
          <div className="w-fit flex gap-[29px]">
            <div className="bg-[#FBFBFB] w-[50px] h-[50px] flex items-center justify-center rounded-[100%] cursor-pointer">
              <FacebookIcon />
            </div>

            <div className="bg-[#FBFBFB] w-[50px] h-[50px] flex items-center justify-center rounded-[100%] cursor-pointer">
              <InstagramIcon />
            </div>

            <div className="bg-[#FBFBFB] w-[50px] h-[50px] flex items-center justify-center rounded-[100%] cursor-pointer">
              <LinkedinIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
