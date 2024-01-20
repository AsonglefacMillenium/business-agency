import { Text } from "@/components/atoms";
import React from "react";
import { pageData, utilityPageData } from "./footer.data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#0C0C0C] pt-[100px] pb-[60px]">
      <div className="w-[80%] mx-auto flex flex-col gap-[100px] ">
        <div className="w-full flex justify-between flex-wrap">
          <div className="w-[20%] flex flex-col gap-[24px]">
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
                <Link href={data.route}>
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
                <Link href={data.route}>
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

          <div className="flex flex-col gap-[19px] w-[20%]">
          <Text
                    text="Subscribe"
                    color="#F4F4F4"
                    fontSize={"large"}
                    fontWeight={"bold"}
                  />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
