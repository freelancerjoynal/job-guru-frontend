import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";

export default function WatchVideo() {
  return (
    <div className='py-20 bg-[url("/images/videobg.jpg")] bg-scroll bg-no-repeat text-white'>
      <h2 className="text-2xl uppercase text-gray-400 mb-2 text-center">
        Here You Can See
      </h2>
      <h3 className="text-center text-3xl lg:text-6xl">Watch Our Video</h3>
      <p className="text-center max-w-[750px] mx-auto py-2">
        Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac
        condimentum. Vestibulum congue posuere lacus, id tincidunt nisi porta
        sit amet. Suspendisse et sapien varius, pellentesque dui non, semper
        orci.
      </p>
      <div className="flex justify-center">
        <FaRegCirclePlay size={60} />
      </div>
    </div>
  );
}
