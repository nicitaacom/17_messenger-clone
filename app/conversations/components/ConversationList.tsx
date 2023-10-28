"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { MdOutlineGroupAdd } from "react-icons/md";
import clsx from "clsx";

import useConversation from "@/app/hooks/useConversation";
import { FullConversationType } from "@/app/types";
import ConversationBox from "./ConversationBox";
import GroupChatModal from "./GroupChatModal";
import { User } from "@prisma/client";

interface ConversationListProps {
  initialItems: FullConversationType[];
  users:User[]
}

export default function ConversationList({
  initialItems,
  users
}: ConversationListProps) {
  const [items, setItems] = useState(initialItems);
  const [isModalOpen,setIsModalOpen] = useState(false)

  const router = useRouter();

  const { conversationId, isOpen } = useConversation();

  return (
  <>
  <GroupChatModal users={users} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    <aside
      className={clsx(
        `fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 bg-[#303030]`,
        isOpen ? "hidden" : "block w-full left-0",
      )}
    >
      <div className="px-5">
        <div className="flex justify-between mb-4 pt-4">
          <div className="text-2xl font-bold text-neutral-100">Messages</div>
          <div className="rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition"
          onClick={() => setIsModalOpen(true)}>
            <MdOutlineGroupAdd size={20} />
          </div>
        </div>
        {items.map((item) => (
          <ConversationBox
            key={item.id}
            data={item}
            selected={conversationId === item.id}
          />
        ))}
      </div>
    </aside>
    </>
  );
}
