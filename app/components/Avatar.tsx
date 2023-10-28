"use client";

import Image from "next/image";

import { User } from "@prisma/client";
import useActiveList from "../hooks/useActiveList";

interface AvatarProps {
  user?: User;
}

export default function Avatar({ user }: AvatarProps) {

  const {members} = useActiveList()
  const isActive = members.indexOf(user?.email!) !== -1

  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden w-9 h-9 md:w-11 md:h-11">
        <Image
          src={user?.image || "/images/placeholder.jpg"}
          alt="Avatar"
          fill
        />
      </div>
      {isActive &&
      <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 w-2 h-2 md:w-3 md:h-3"></span>
      }
    </div>
  );
}
