'use client'
import useConversation from "@/app/hooks/useConversation"
import { FullMessageType } from "@/app/types"
import { useEffect, useRef, useState } from "react"
import MessageBox from "./MessageBox"
import axios from "axios"

	

interface BodyProps {
  initialMessages:FullMessageType[]
}

export default function Body ({initialMessages}:BodyProps) {

  const [messages,setMessages] = useState(initialMessages)
  const bottomRef = useRef<HTMLDivElement>(null)
  
  const {conversationId} = useConversation()

  useEffect(() => {
    axios.post(`api/conversations/${conversationId}/seen`)
  },[conversationId])

return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message,i) => (
        <MessageBox isLast={i === messages.length -1}
        key={message.id} data={message}/>
      ))}
      <div className="pt-24" ref={bottomRef}/>
    </div>
)
}