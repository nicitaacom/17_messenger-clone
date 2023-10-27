'use client'
import Avatar from "@/app/components/Avatar"
import useOtherUser from "@/app/hooks/useOtherUser"
import { Conversation, User } from "@prisma/client"
import Link from "next/link"
import { useMemo, useState } from "react"
import { HiChevronLeft } from "react-icons/hi"
import { HiEllipsisHorizontal } from "react-icons/hi2"
import ProfileDrawer from "./ProfileDrawer"

	

interface HeaderProps {
  conversation:Conversation & {
    users:User[]
  }
}

export default function Header ({conversation}:HeaderProps) {

  const otherUser = useOtherUser(conversation)
  const [drawerOpen,setDrawerOpen] = useState(false)

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`
    }

    return `Active`
  },[conversation])

return (
   <>
   <ProfileDrawer data={conversation} isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}/>
    <div className="bg-[#303030] text-neutral-100 w-full flex justify-between items-center shadow-sm border-b sm:px-4 px-4 py-3 lg:px-6">
      <div className="flex gap-3 items-center">
        <Link className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer"
         href='/conversations'>
          <HiChevronLeft size={32}/>
         </Link>
         <Avatar user={otherUser}/>
         <div className="flex flex-col">
          <div>
            {conversation.name || otherUser.name}
          </div>
          <div className="text-sm font-light text-neutral-300">
            {statusText}
          </div>
         </div>
      </div>
      <HiEllipsisHorizontal className="text-sky-500 cursor-pointer hover:text-sky-600 transition" size={32} onClick={() => setDrawerOpen(true)}/>
    </div>
   </>
)
}