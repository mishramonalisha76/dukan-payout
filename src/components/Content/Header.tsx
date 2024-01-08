import React from "react";
import { FiSearch } from "react-icons/fi";
import GroupIcon from "../../assets/group.svg";
import { BiSolidDownArrow } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";


export const Header = () => {
  return (
    <div className="w-full h-[50px] bg-white flex gap-[16px] py-[10px] justify-between px-[25px] items-center  border-b-[1px] border-b-[#d9d9d9]">
      <div className="flex gap-4 items-center">
        <p className="text-sm text-[#1A181E]">Payments</p>
        <p className="text-xs text-[#4d4d4d] items-center flex gap-1">
            <BsQuestionCircle color="#4d4d4d "/>
            How it works?</p>
      </div>

      <div
        className="  text-[#4d4d4d] flex gap-1 items-center justify-start 
          px-3 py-2  text-sm rounded-[4px] bg-[#f2f2f2] w-[25%]"
      >
        <FiSearch color="#808080" />
        <input
          className="h-full w-full bg-transparent text-xs text-[#808080]"
          placeholder="Search features,tutorials, etc."
        ></input>
      </div>
      <div className="flex gap-1 items-center">
        <div className="rounded-full bg-[#f2f2f2] w-[35px] h-[35px] flex items-center justify-center">
          <img src={GroupIcon} />
        </div>
        <div className="rounded-full bg-[#f2f2f2] w-[35px] h-[35px] flex items-center justify-center">

           <BiSolidDownArrow />
        </div>
      </div>
    </div>
  );
};
