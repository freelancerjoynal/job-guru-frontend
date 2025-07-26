import React from "react";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function UserProfileBox() {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Image
            src={"/images/user.jpg"}
            height={40}
            width={40}
            alt="User profile image"
            className="rounded-full cursor-pointer"
          ></Image>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
    </>
  );
}
