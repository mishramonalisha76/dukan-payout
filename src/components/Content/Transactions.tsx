import React from "react";
import { BiSortAlt2 } from "react-icons/bi";
import { CiCircleInfo } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

export const Transactions = () => {
  const orders = [
    {
      id: "#234567",
      date: "7 July,2023",
      amount: "Rs1,234.76",
      fee: "Rs23",
    },
    {
      id: "#234567",
      date: "7 July,2023",
      amount: "Rs1,234.76",
      fee: "Rs23",
    },
    {
      id: "#234567",
      date: "7 July,2023",
      amount: "Rs1,234.76",
      fee: "Rs23",
    },
    {
      id: "#234567",
      date: "7 July,2023",
      amount: "Rs1,234.76",
      fee: "Rs23",
    },
    {
      id: "#234567",
      date: "7 July,2023",
      amount: "Rs1,234.76",
      fee: "Rs23",
    },
    {
      id: "#234567",
      date: "7 July,2023",
      amount: "Rs1,234.76",
      fee: "Rs23",
    },
    {
      id: "#234567",
      date: "7 July,2023",
      amount: "Rs1,234.76",
      fee: "Rs23",
    },
    {
      id: "#234567",
      date: "7 July,2023",
      amount: "Rs1,234.76",
      fee: "Rs23",
    },
    {
      id: "#234567",
      date: "7 July,2023",
      amount: "Rs1,234.76",
      fee: "Rs23",
    },
    {
      id: "#234567",
      date: "7 July,2023",
      amount: "Rs1,234.76",
      fee: "Rs23",
    },
    {
      id: "#234567",
      date: "7 July,2023",
      amount: "Rs1,234.76",
      fee: "Rs23",
    },
  ];
  return (
    <div className="w-full h-full flex  items-center flex-col gap-5 px-[25px] pt-4">
      <div className="flex justify-between w-full">
        <p className=" font-medium text-lg">Transactions | This Month</p>
      </div>

      <div className=" bg-white flex flex-col gap-[6px] p-3 w-full rounded-[8px]  shadow-sm">
        <div
          className="flex 
            justify-between  w-full pb-2
           "
        >
          <div
            className=" bg-white text-[#4d4d4d] flex gap-1 items-center justify-between border-[1px] border-[#d9d9d9]
          px-2 py-2 pr-4 text-sm rounded-[4px]"
          >
            <FiSearch color="#d9d9d9" />
            <input
              className="h-full bg-transparent text-xs"
              placeholder="Search by order ID..."
            ></input>
          </div>

          <div className="flex gap-2 ">
            <span
              className=" bg-white text-[#4d4d4d] flex gap-1 items-center justify-between border-[1px] border-[#d9d9d9]
          px-2 py-1 text-sm rounded-[4px]"
            >
              Sort
              <span>
                <BiSortAlt2 color="#4d4d4d" />
              </span>
            </span>
            <span
              className=" bg-white text-[#4d4d4d] flex gap-1 items-center justify-between border-[1px] border-[#d9d9d9]
          px-2 py-1 text-sm rounded-[4px]"
            >
              <FiDownload color="#4d4d4d" />
            </span>
          </div>
        </div>
        <div
          className="flex 
            justify-between  rounded-[4px] bg-[#f2f2f2] 
            px-2 py-2 "
        >
          <span className="text-sm">Order ID</span>
          <span className="text-sm">Order Date</span>
          <span className="text-sm">Order Amount</span>
          <span className="text-sm flex gap-[1px] items-center">
            Transaction Fees{" "}
            <span>
              <CiCircleInfo />
            </span>
          </span>
        </div>
        <div className="flex flex-col w-full overflow-y-auto max-h-[80%]">
          {orders.map((order, i) => (
            <div
              key={`order.id ${i}`}
              className="flex 
            justify-between border-b-[1px] border-b-[#d9d9d9]
            px-3 py-2 "
            >
              <span className="text-sm text-[#146EB4]">{order.id}</span>
              <span className="text-sm">{order.date}</span>
              <span className="text-sm">{order.amount}</span>
              <span className="text-sm">{order.fee}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
