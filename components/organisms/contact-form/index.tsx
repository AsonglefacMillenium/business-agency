import { Button, Input, Textarea } from "@/components/molecules";
import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex lg:flex-row flex-col gap-4 justify-between">
        <div className="lg:w-[45%] w-full">
          <Input type="text" placeholder="First name" />
        </div>
        <div className="lg:w-[45%] w-full">
          <Input type="text" placeholder="Last name" />
        </div>
      </div>

      <div className="w-full flex gap-4 lg:flex-row flex-col justify-between">
        <div className="lg:w-[45%] w-full">
          <Input type="email" placeholder="Email" />
        </div>
        <div className="lg:w-[45%] w-full">
          <Input type="text" placeholder="Phone Number" />
        </div>
      </div>

      <div>
        <Textarea placeholder="Message" />
      </div>
      <div className="w-[50%]">
        <Button text="Submit Now" bgColor="#000" color="#fff" />
      </div>
    </div>
  );
};

export default ContactForm;
