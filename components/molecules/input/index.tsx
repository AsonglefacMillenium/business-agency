import React from "react";

const Input = ({ ...props }: InputProps) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      className="w-full text-[#000] outline-none text-xl py-8"
      style={{
        borderBottom: "1px solid #000000",
      }}
    />
  );
};

export default Input;
