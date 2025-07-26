import React from "react";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link';


export default function HeaderSearch() {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search"
        className=" border border-[#334155] rounded-full pl-4 pr-2 outline-none py-1 text-slate-600"
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
