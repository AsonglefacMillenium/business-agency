import React from "react";

const Textarea = ({ ...props }: InputProps) => {
  return (
    <textarea
      name={props.name}
      placeholder={props.placeholder}
      id=""
      cols={10}
      rows={5}
      className="w-full text-[#000] outline-none text-xl py-8"
      style={{
        borderBottom: "1px solid #000000",
      }}
    ></textarea>
  );
};

export default Textarea;
