"use client";

import { useState } from "react";
import Dashboard from "./_components/Dashboard";
import { FaPlus } from "react-icons/fa";
import TransactionHistory from "./_components/TransactionHistory";
import FriendBalance from "./_components/FriendBalance";
import AddTransactionForm from "./_components/AddTransactionForm";

export default function Home() {
  const [openTab, setOpenTab] = useState("transactions");
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="p-2 relative">
      <div className="flex flex-col md:flex-row gap-3 ">
        <div className="md:w-3/4">
          <Dashboard />
        </div>
        <div className="md:w-1/4 p-3 h-20 bg-blue-500 hover:bg-blue-400 rounded-2xl cursor-pointer flex items-center justify-center">
          <button
            className="w-full h-full font-medium text-white md:text-lg flex items-center justify-center cursor-pointer "
            onClick={() => setShowOverlay(!showOverlay)}
          >
            <FaPlus className="text-base mr-2" /> Add Transaction
          </button>
        </div>
      </div>

      <div className="mt-5 flex bg-gray-100 p-1 gap-1 rounded-lg">
        <button
          className={`p-1 text-center  w-full rounded-full md:text-lg ${
            openTab === "transactions" ? "bg-blue-300 font-medium" : "bg-white"
          }`}
          onClick={() => setOpenTab("transactions")}
        >
          Transactions
        </button>
        <button
          className={`p-1 text-center w-full rounded-full md:text-lg  ${
            openTab === "friends" ? " bg-blue-300 font-medium" : "bg-white"
          }`}
          onClick={() => setOpenTab("friends")}
        >
          Friends
        </button>
      </div>

      <div className="mt-5">
        {openTab === "transactions" ? (
          <TransactionHistory />
        ) : (
          <FriendBalance />
        )}
      </div>

      {showOverlay && (
        <div className="fixed inset-0  bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96">
            <button
              className="absolute top-5 right-5 text-gray-600 hover:text-gray-900"
              onClick={() => setShowOverlay(false)}
            >
              ✖
            </button>
            <AddTransactionForm closeOverlay={() => setShowOverlay(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
