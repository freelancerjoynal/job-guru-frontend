"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Combobox from "./Combobox";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";



export default function Searchwrap() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  console.log(searchInput);

  const categoryitems = [
    { id: "1", title: "Backlog" },
    { id: "2", title: "Todo" },
    { id: "3", title: "In Progress" },
    { id: "4", title: "Done" },
    { id: "5", title: "Canceled" },
  ];

  const cityitems = [
    { id: "1", title: "New York" },
    { id: "2", title: "Los Angeles" },
    { id: "3", title: "Chicago" },
    { id: "4", title: "Houston" },
    { id: "5", title: "Phoenix" },
  ];

  // ✅ Handlers
  const handleCategoryChange = (id) => {
    setSelectedCategory(id);
    console.log("Selected Category:", id);
  };

  const handleCityChange = (id) => {
    setSelectedCity(id);
    console.log("Selected City:", id);
  };

  return (
    <div className="bg-[url(/images/search-bg.jpg)] pt-28 pb-28 text-white">
      <h1 className="text-center text-5xl font-bold">
        One million success stories.{" "}
        <span className="text-purple-500">Start yours today.</span>
      </h1>
      <h2 className="text-center text-xl">
        Find 40,000+ Jobs, Employment & Career Opportunities
      </h2>
      <br />
      <br />
      <div className="flex items-center flex-col lg:flex-row justify-center gap-4 ">
        <Input
          placeholder="Search for jobs"
          className="w-[300px] py-8 px-6 rounded-full"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Combobox
          title="Select category"
          items={categoryitems}
          btnStyles={
            "w-[300px] justify-between bg-transparent rounded-full py-8"
          }
          onChange={handleCategoryChange}
        />

        <Combobox
          title="Select city"
          items={cityitems}
          btnStyles={
            "w-[300px] justify-between bg-transparent rounded-full py-8"
          }
          onChange={handleCityChange}
        />
      </div>
      <div className="text-center mt-3">
        <button
          className={`px-30 py-4 bg-slate-50 text-slate-800 rounded-full`}
        >
          Search
        </button>
      </div>
      <div className="text-center mt-3 flex items-center justify-center flex-col md:flex-row gap-3">
        <Link href={"#"}>
          <button className={`px-30 py-4 bg-purple-500 rounded-full flex items-center gap-3`}>
            <FaShoppingBag />

            Post a job
          </button>
        </Link>
        <Link href={"#"}>
          <button className={`px-30 py-4 bg-blue-500 rounded-full flex items-center gap-3`}>
            <PiStudentBold />
            Search Jobs
          </button>
        </Link>
      </div>
    </div>
  );
}
