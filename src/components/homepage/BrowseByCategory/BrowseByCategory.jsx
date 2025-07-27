"use client";
import { jobCategories } from "@/database/JobCategories";
import Link from "next/link";
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";

const BrowseJobsBy = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-25 bg-white">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-between items-center border-b-2 pb border-purple-500">
          <h2 className="text-2xl uppercase font-semibold text-center flex items-center gap-2">
            Browse Jobs By <FaLongArrowAltRight className="text-purple-500" />
          </h2>
          <div className="flex space-x-1 ">
            {["Most Popular", "Creative Fields", "Other Categories"].map(
              (tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 text-sm font-medium  transition-colors cursor-pointer ${
                    activeTab === index
                      ? "bg-purple-500 text-white"
                      : "text-gray-600 hover:text-gray-800 border-l-2"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mx-auto w-full">
          {jobCategories[activeTab].map((category, index) => (
            <div key={index} className="flex mt-1 items-center gap-2">
              <Link href={"#"}>
                <h3 className="font-medium text-gray-800 flex items-center gap-1">
                  {" "}
                  <GoTriangleRight />
                  {category.name}
                </h3>
              </Link>
              <span className="text-sm text-green-500">({category.count})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseJobsBy;
