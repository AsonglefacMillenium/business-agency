import { Text } from "@/components/atoms";
import { EmailIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/atoms/icons";
import ContactItem from "@/components/molecules/contact-item";
import { ContactForm } from "@/components/organisms";
import React from "react";

const ContactSection = () => {
  return (
    <div className="w-full bg-white flex items-center justify-center my-[100px]">
      <div className="w-[80%] flex justify-between ">
        <div className="w-[40%] gap-[40px] flex flex-col">
          <Text
            color="#000000"
            text="Let’s talk"
            fontSize={"XXlarge"}
            fontWeight={"bold"}
          />

          <Text
            color="#000000"
            text="We collaborate with thousands of creators, 
            entrepreneurs and complete legends."
            fontSize={"normal"}
            fontWeight={"400"}
          />

          <div className="flex flex-col gap-8">
            <ContactItem
              title="Our email"
              text="hello@example.com"
              icon={<EmailIcon />}
            />

            <ContactItem
              title="Our email"
              text="hello@example.com"
              icon={<EmailIcon />}
            />

            <ContactItem
              title="Our email"
              text="hello@example.com"
              icon={<EmailIcon />}
            />
          </div>

          <div className="flex gap-8 items-center">
            <a href="">
              <FacebookIcon />
            </a>

            <a href="">
              <LinkedinIcon />
            </a>

            <a href="">
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="w-[50%] p-[45px]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
