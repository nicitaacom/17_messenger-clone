'use client'	

import { useCallback,useMemo } from "react"
import { useRouter } from "next/navigation"
import { Conversation,Message,User } from "@prisma/client"
import {format} from 'date-fns'
import {useSession} from 'next-auth/react'
import clsx from 'clsx'
import { FullConversationType } from "@/app/types"
import useOtherUser from "@/app/hooks/useOtherUser"
import Avatar from "@/app/components/Avatar"


interface ConversationBoxProps {
data:FullConversationType
selected?:boolean
}

export default function ConversationBox ({data,selected}:ConversationBoxProps) {

    const otherUser = useOtherUser(data)
    const session = useSession()
    const router = useRouter()

    const handleClick = useCallback(() => {
        router.push(`/conversations/${data.id}`)
    },[data.id,router])

    const lastMessage = useMemo(() => {
        const messages = data.messages || []

        return messages[messages.length -1]
    },[data.messages])


    const userEmail = useMemo(() => {
        return session.data?.user?.email 
    },[session.data?.user?.email])

    const hasSeen = useMemo(() => {
        if (!lastMessage) {
            return false
        }

    const seenArray = lastMessage.seen || []

    if (!userEmail) {
        return false
    }

    return seenArray.filter(user => user.email === userEmail).length !== 0
    
    },[userEmail,lastMessage])

    const lastMessageText = useMemo(() => {
        if (lastMessage?.image) {
            return 'Sent an iamge'
        }
        if (lastMessage?.body) {
            return lastMessage.body
        } 

        return 'Start a conversation'
    },[lastMessage])

return (
    <div className={clsx(`w-full relative flex items-center space-x-3 hover:bg-[#404040] rounded-lg
    transition cursor-pointer p-3 text-neutral-100`,selected ? 'bg-[#404040]' : 'bg-[#303030]')}
     onClick={handleClick}>
        <Avatar user={otherUser}/>
     </div>
)
}