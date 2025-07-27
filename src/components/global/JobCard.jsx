import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function JobCard({ job }) {
  const { title, company, location, category, apply, logo } = job;
  return (
    <div className="lg:flex justify-between items-center bg-white shadow-md rounded-lg p-4 max-w-2xl w-full mx-auto border-b-2 hover:border-purple-500 hover:transition-all duration-300">
      {/* Left Section */}
      <div className="flex flex-col lg:flex-row items-start space-x-4">
        <Image
          src={logo}
          alt="Company Logo"
          width={100}
          height={100}
          className="mx-auto lg:mx-0"
        />
        <div>
          <h2 className="lg:text-xl font-bold">{title}</h2>
          <p className="text-blue-600 hover:underline cursor-pointer text-sm text-left">
            {company}
          </p>
          <div className="flex items-center mt-1 space-x-2 text-sm">
            <span className="bg-purple-500 text-white px-3 py-1">
              {category}
            </span>
            <span className="text-gray-500">- {location}</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <Link href={apply}  className="border border-blue-700 text-blue-700 px-4 py-1 rounded hover:bg-blue-50 transition">
          Apply Now
      </Link>
    </div>
  );
}
