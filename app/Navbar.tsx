import Link from "next/link";
import React from "react";
import { LuCreditCard } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="p-2 sticky top-0 left-0 bg-white">
      <Link href={"/"} className="flex space-x-1 items-center ">
        <LuCreditCard size={25} color="#2b7fff" strokeWidth={2.3}/>
        <span className="text-lg font-semibold">ExpenseTracker</span>
      </Link>

      
    </nav>
  );
};

export default Navbar;
