import React from "react";
import JobCard from "@/components/global/JobCard";
import JobData from "@/database/JobData";

export default function LatestJobs() {
    const jobList = JobData;
  return (
    <div className="py-25">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl uppercase text-gray-400 mb-2">
          Here You Can See
        </h2>
        <h3 className="text-4xl text-blue-600">
          <span className="text-blue-600 font-bold">LATEST</span>{" "}
          <span className="text-purple-700">JOBS</span>
        </h3>
        <div className="h-1 w-35 bg-blue-500 m-auto mt-3"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
            {jobList.map((job, index) => (
                <JobCard key={index} job={job} />
            ))}
        </div>
      </div>
    </div>
    </div>
  );
}
