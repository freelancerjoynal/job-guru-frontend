import React from "react";
import Image from "next/image";
import Link from "next/link";

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
            className="rounded-full cursor-pointer pt-2"
          ></Image>
        </PopoverTrigger>
        <PopoverContent className={`max-w-45`}>
            <ul>
                <li><Link className="hover:bg-slate-150 py-2" href={'/profile'}>Login</Link></li>
                <li><Link className="hover:bg-slate-150 py-2" href={'/profile'}>Register</Link></li>
            </ul>
        </PopoverContent>
      </Popover>
    </>
  );
}
