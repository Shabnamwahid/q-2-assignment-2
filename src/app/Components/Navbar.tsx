import React from "react";
import { GiNoodles } from "react-icons/gi";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="grid xl:grid-cols-1 grid-cols-1 bg-white">
      <div className="p-5">
        <div className="py-3 px-3 rounded-xl border w-full bg-slate-600">
          <div className="flex justify-between items-center">
            <div className="flex justify-items-center items-center gap-2">
              {/* Restaurant logo */}
              <GiNoodles className="w-20 h-20 text-green-600 hover:text-blue-500" />
              {/* Search input */}
              <div style={{ position: "relative" }}>
                <input
                  className="rounded-3xl py-3 px-3 outline-2 text-xs w-[350px] pr-10"
                  placeholder="Search for your Favorite food from Menu."
                />
                <FaSearch className="w-5 h-5 text-red-500 absolute right-0 top-1.5 transform translate-y-1/2" />
              </div>
            </div>
            <div className="flex justify-center items-stretch gap-3">
              <p className="font-bold text-pink-400">
                Order now & get your Order within <span className="text-amber-200">30 minutes</span>
              </p>
              <FaShoppingCart className="inline-block w-14 h-14 rounded-full ring-4 relative ring-pink-500 hover:ring-amber-400 text-green-400 hover:text-pink-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
