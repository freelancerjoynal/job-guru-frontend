import React from "react";
import { CiSearch } from "react-icons/ci";


export default function HeaderSearch() {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search"
        className="bg-[#0F172B] border border-[#334155] rounded-full px-2 py-1 text-white"
      ></input>
      <button type="submit" className="cursor-pointer">
        <CiSearch
          size={25}
          className="border rounded-full p-[5px] -ml-[30px]"
        />
      </button>
    </div>
  );
}
