"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Combobox from "./Combobox";

export default function Searchwrap() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

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
      <div className="flex items-center justify-center gap-4">
        <Input
          placeholder="Search for jobs"
          className="w-[500px]"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Combobox
          title="Select category"
          items={categoryitems}
          onChange={handleCategoryChange}
        />

        <Combobox
          title="Select city"
          items={cityitems}
          onChange={handleCityChange}
        />
      </div>
    </div>
  );
}
