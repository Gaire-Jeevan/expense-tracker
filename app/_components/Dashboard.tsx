import React from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-6 bg-[#eaf8f4] rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">Total Balance</h1>
          <p className="text-gray-700 text-sm sm:text-base">Your overall financial position</p>
        </div>

        <div className="w-10 h-10 rounded-full bg-gray-300 relative">
          <FiDollarSign
            color="#2b7fff"
            size={25}
            className="absolute top-1/2 left-1/2 trasnform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-2xl sm:text-3xl font-bold">$1,250.00</p>
      </div>

      <div className="flex gap-3 mt-4 ">
        <div className="flex items-center space-x-3 w-full">
          <div className="w-7 h-7 rounded-full flex items-center justify-center bg-green-200">
            <BsArrowUpShort size={20} strokeWidth={0.7} color="#28b45d" />
          </div>
          <div>
            <p className="text-gray-700 text-sm sm:text-base">You are owed</p>
            <p className="text-lg sm:text-xl font-medium text-green-600">$2,450.00</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 w-full">
          <div className="w-7 h-7 rounded-full flex items-center justify-center bg-red-200">
            <BsArrowDownShort size={20} strokeWidth={0.7} color="#e71f29" />
          </div>
          <div>
            <p className="text-gray-700 text-sm sm:text-base">You owe</p>
            <p className="text-lg sm:text-xl font-medium text-red-600">$1,200.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
