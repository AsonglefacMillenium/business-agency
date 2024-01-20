import { Input } from "postcss";
import React from "react";
import { Button } from "..";

const SearchBox = () => {
  return (
    <div className="flex w-full py-[10px] pl-[23px] pr-[10px] bg-[#fff] rounded-3xl justify-between items-center">
      <input
        type="text"
        placeholder="Enter your email"
        className="w-[50%] border-none outline-none text-[18px]"
      />
      <div className="w-[35%]">
        <Button
          text="Subscribe"
          color="#fff"
          bgColor="#000"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default SearchBox;
