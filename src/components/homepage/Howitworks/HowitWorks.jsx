import Image from "next/image";
import React from "react";
import Steps from "./Steps";

import { FaRegUser, FaBlackTie, FaFileAlt } from "react-icons/fa";

const HowitWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Create An Account",
      description:
        "Sign up in minutes and set up your personalized profile to get noticed by top employers. Make your first impression count.",
      icon: (
        <FaRegUser className="text-3xl bg-blue-400 p-4 w-20 h-20 m-auto rounded-full text-white" />
      ),
    },
    {
      id: 2,
      title: "Search Desired Job",
      description:
        "Explore thousands of job listings tailored to your interests and qualifications. Use filters to narrow down the perfect match.",
      icon: (
        <FaBlackTie className="text-3xl bg-black text-white p-4 w-20 h-20 m-auto rounded-full" />
      ),
    },
    {
      id: 3,
      title: "Send Your Resume",
      description:
        "Apply instantly with your uploaded resume and track your application status. It's never been easier to put yourself out there.",
      icon: (
        <FaFileAlt className="text-3xl bg-purple-400 p-4 w-20 h-20 m-auto rounded-full text-white" />
      ),
    },
  ];

  return (
    <section className="py-25 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl uppercase text-gray-400 mb-2">
            Here You Can See
          </h2>
          <h3 className="text-4xl text-blue-600">
            <span className="text-blue-600 font-bold">HOW</span>{" "}
            <span className="text-purple-700">It </span>{" "}
            <span className="italic">Works</span>
          </h3>
          <div className="h-1 w-35 bg-blue-500 m-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => {
            return <Steps key={step.id} step={step}></Steps>;
          })}
        </div>
      </div>
    </section>
  );
};

export default HowitWorks;
