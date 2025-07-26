import React from "react";
import Link from "next/link";

export default function PostOrApply() {
  return (
    <>
      <div className="uppercase text-sm">
        <Link className="bg-purple-600 text-white py-3.5 px-4 rounded-l-full" href={"#"}>post a Job</Link>
        <Link className="bg-blue-600 text-white py-3.5 px-4 rounded-r-full" href={"#"}>job seeker</Link>
      </div>
    </>
  );
}
