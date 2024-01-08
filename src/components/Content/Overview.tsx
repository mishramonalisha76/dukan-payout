import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Overview = () => {
  return (
    <div className="w-full h-[20%] flex  items-center flex-col gap-5 px-[25px] ">
      <div className="flex justify-between w-full items-center">
        <p className=" font-medium text-lg">Overview</p>
        <p className=" bg-white text-[#4d4d4d] flex gap-1 items-center justify-between border-[1px] border-[#d9d9d9] px-2 py-1  text-sm rounded-[4px]">
          Last Month
          <IoIosArrowDown />
        </p>
      </div>
      <div className="flex w-full gap-5">
        <div className=" bg-white flex flex-col gap-[16px] p-[20px] w-full rounded-[8px]  shadow-sm">
          <p className="text-[#4d4d4d]">Online Orders</p>
          <p className="text-[35px] font-[500]">231</p>
        </div>
        <div className="bg-white flex flex-col gap-[16px]  p-[20px] w-full rounded-[8px]  shadow-sm">
          <p className="text-[#4d4d4d]">Amount received</p>
          <p className="text-[35px] font-[500]">Rs 23,876,908.12</p>
        </div>
      </div>
    </div>
  );
};
