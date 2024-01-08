import React from "react";
import { Header } from "./Header";
import { Overview } from "./Overview";
import { Transactions } from "./Transactions";

export const Content = () => {
  return (
    <div className="flex flex-col h-full  w-full gap-6 bg-[#fafafa]">
     <Header/>
     {/* <div className="flex flex-col w-full h-full px-[25px]"> */}
     <Overview/>
     <Transactions/>
     {/* </div> */}
 
    </div>
  );
};
