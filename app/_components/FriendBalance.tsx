import React from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

const FriendBalance = () => {
  const friends = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/placeholder.svg",
      initials: "AJ",
      balance: 450,
    },
    {
      id: 2,
      name: "Sam Wilson",
      avatar: "/placeholder.svg",
      initials: "SW",
      balance: -120,
    },
    {
      id: 3,
      name: "Taylor Swift",
      avatar: "/placeholder.svg",
      initials: "TS",
      balance: 850,
    },
    {
      id: 4,
      name: "Morgan Freeman",
      avatar: "/placeholder.svg",
      initials: "MF",
      balance: -350,
    },
    {
      id: 5,
      name: "Chris Evans",
      avatar: "/placeholder.svg",
      initials: "CE",
      balance: 220,
    },
  ];

  return (
    <div className="border border-gray-300 p-4 rounded-lg">
      <div className="mb-3">
        <p className="text-2xl font-bold">Friend Balances</p>
        <p className="text-gray-700">See what you owe and are owed</p>
      </div>

      <div className="space-y-4">
        {friends.map((friend) => (
          <div
            key={friend.id}
            className="friend-card flex items-center justify-between rounded-lg border p-3 transition-all"
          >
            <div className="flex items-center gap-3">
              <div>
                <p className="font-medium">{friend.name}</p>
                <p className="text-sm text-muted-foreground">
                  {friend.balance > 0
                    ? "Owes you"
                    : friend.balance < 0
                    ? "You owe"
                    : "Settled up"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {friend.balance !== 0 && (
                <div
                  className={`rounded-full p-1 ${
                    friend.balance > 0 ? "bg-green-500/20" : "bg-red-500/20"
                  }`}
                >
                  {friend.balance > 0 ? (
                    <BsArrowUpShort className="h-3 w-3 text-green-500" />
                  ) : (
                    <BsArrowDownShort className="h-3 w-3 text-red-500" />
                  )}
                </div>
              )}
              <p
                className={`font-semibold ${
                  friend.balance > 0
                    ? "text-green-500"
                    : friend.balance < 0
                    ? "text-red-500"
                    : "text-muted-foreground"
                }`}
              >
                ${Math.abs(friend.balance).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendBalance;
