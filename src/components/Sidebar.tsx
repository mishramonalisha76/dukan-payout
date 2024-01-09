import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GoHome } from "react-icons/go";
import { CiWallet } from "react-icons/ci";

export const Sidebar = () => {
  const lists = [
    {
      icon: <GoHome color="#fff" />,
      title: "Home",
    },
    {
      icon: <GoHome color="#fff" />,
      title: "Orders",
    },
    {
      icon: <GoHome color="#fff" />,
      title: "Product",
    },
    {
      icon: <GoHome color="#fff" />,
      title: "Delivery",
    },
    {
      icon: <GoHome color="#fff" />,
      title: "Marketing",
    },
    {
      icon: <GoHome color="#fff" />,
      title: "Analytics",
    },
    {
      icon: <GoHome color="#fff" />,
      title: "Payments",
    },
    {
      icon: <GoHome color="#fff" />,
      title: "Tools",
    },
    {
      icon: <GoHome color="#fff" />,
      title: "Discounts",
    },
    {
      icon: <GoHome color="#fff" />,
      title: "Audience",
    },
    {
      icon: <GoHome color="#fff" />,
      title: "Appearance",
    },
    {
      icon: <GoHome color="#fff" />,
      title: "Plugins",
    },
  ];
  return (
    <div className="flex h-full bg-[#27304c] w-[224px] justify-between px-[16px] py-[10px] gap-6 flex-col">
      <div className="flex gap-6 flex-col">
      <div className="flex gap-3 w-full items-start">
        <div className="w-[39px] h-[39px] bg-white rounded-md"></div>
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col ">
            <p className="text-white text-sm font-medium">Nishyan</p>
            <p className="text-white text-xs underline underline-offset-2">
              Visit store
            </p>
          </div>
          <div>
            <IoIosArrowDown color="#fff" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full px-1">
        {lists.map((list, i) => (
          <div key={`title${i}`} className="flex gap-2 items-center">
            <span>{list.icon}</span>
            <span className="text-white text-sm font-normal">{list.title}</span>
          </div>
        ))}
      </div>
      </div>
      <div className="flex w-full gap-2 items-center  bg-[#313a58] rounded-[4px]  px-3 py-2">
        <div className="bg-[#4b5880] rounded-[4px] flex items-center w-fit h-fit p-1 ">
            <CiWallet color='#fff' size={30}/>
        </div>
        <div className="flex flex-col text-white  ">
          <span className=" text-xs ">Available credits</span>
          <span className=" text-md font-medium">222.10</span>
        </div>
      </div>
    </div>
  );
};
