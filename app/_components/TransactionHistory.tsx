"use client";

import React from "react";
import { RxArrowBottomLeft, RxArrowTopRight } from "react-icons/rx";


const TransactionHistory = () => {
  const transactions = [
    {
      id: 1,
      description: "Dinner at Italian Restaurant",
      amount: 45,
      type: "borrowed", // You borrowed from friend
      friend: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg",
        initials: "AJ",
      },
      date: new Date(2023, 6, 15),
    },
    {
      id: 2,
      description: "Movie tickets",
      amount: 30,
      type: "lent", // You lent to friend
      friend: {
        name: "Sam Wilson",
        avatar: "/placeholder.svg",
        initials: "SW",
      },
      date: new Date(2023, 6, 10),
    },
    {
      id: 3,
      description: "Uber ride",
      amount: 25,
      type: "borrowed",
      friend: {
        name: "Taylor Swift",
        avatar: "/placeholder.svg",
        initials: "TS",
      },
      date: new Date(2023, 6, 5),
    },
    {
      id: 4,
      description: "Groceries",
      amount: 75,
      type: "lent",
      friend: {
        name: "Morgan Freeman",
        avatar: "/placeholder.svg",
        initials: "MF",
      },
      date: new Date(2023, 6, 1),
    },
  ];

  return (
    <div className="border border-gray-300 p-4 rounded-lg">
      <div className="mb-3">
        <p className="text-2xl font-bold">Transaction History</p>
        <p className="text-gray-700">Your recent financial activities</p>
      </div>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="transaction-item flex items-center justify-between rounded-lg border p-3 transition-all"
          >
            <div className="flex items-center gap-3">
              <div>
                <p className="font-medium">{transaction.description}</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-muted-foreground">
                    {transaction.friend.name}
                  </p>
                  {/* <span className="text-xs text-muted-foreground">•</span> */}
                  {/* <p className="text-sm text-muted-foreground">{format(transaction.date, "MMM d, yyyy")}</p> */}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`flex rounded-full items-center px-1
                    ${
                      transaction.type === "borrowed"
                        ? "bg-red-500/10 text-red-500 hover:bg-red-500/20 hover:text-red-500"
                        : transaction.type === "lent"
                        ? "bg-green-500/10 text-green-500 hover:bg-green-500/20 hover:text-green-500"
                        : "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 hover:text-blue-500"
                    }
                  `}
              >
                {transaction.type === "borrowed" ? (
                  <RxArrowBottomLeft className="mr-1 h-3 w-3" />
                ) : (
                  <RxArrowTopRight className="mr-1 h-3 w-3" />
                )}
                {transaction.type.charAt(0).toUpperCase() +
                  transaction.type.slice(1)}
              </span>
              <p
                className={`font-semibold ${
                  transaction.type === "borrowed"
                    ? "text-red-500"
                    : transaction.type === "lent"
                    ? "text-green-500"
                    : "text-blue-500"
                }`}
              >
                ${transaction.amount.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
