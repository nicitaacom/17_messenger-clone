"use client";

import Avatar from "@/app/components/Avatar";
import LoadingModal from "@/app/components/LoadingModal";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

interface UserBoxProps {
  data: User;
}

export default function UserBox({ data }: UserBoxProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);

    axios
      .post("/api/conversations", {
        userId: data.id,
      })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);

  return (
  <>
  {isLoading && <LoadingModal/>}
      <div
      className="relative w-full flex items-center space-x-3 bg-[#202020] p-3 hover:bg-[#404040] 
  rounded-lg transition cursor-pointer text-neutral-100"
      onClick={handleClick}
    >
      <Avatar user={data} />
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div className="flex justify-center items-center mb-1">
            <p className="text-sm font-medium">{data.name}</p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
