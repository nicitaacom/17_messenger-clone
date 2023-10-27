'use client'

import Image from "next/image"

import { useSession } from "next-auth/react"
import format from "date-fns/format"
import clsx from "clsx"

import Avatar from "@/app/components/Avatar"
import { FullMessageType } from "@/app/types"

	

interface MessageBoxProps {
  data:FullMessageType
  isLast?:boolean
}

export default function MessageBox ({data,isLast}:MessageBoxProps) {

  const session = useSession()

  const isOwn = session.data?.user?.email === data?.sender?.email
  const seenList = (data.seen || []).filter(user => user.email !== data.sender?.email)
  .map(user => user.name)
  .join(', ')

  const container = clsx('flex gap-3 p-4',isOwn && 'justify-end')

  const avatar = clsx(isOwn && 'order-2')

  const body = clsx('flex flex-col gap-2',isOwn && 'items-end')

  const message = clsx('text-sm w-fit overflow-hidden',isOwn ? 'bg-sky-500 text-white' : 'bg-gray-500',
  data.image ? 'rounded-md p-0' : 'rounded-full px-3 py-2')

return (
    <div className={container}>
      <div className={avatar}>
        <Avatar user={data.sender}/>
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-500">
            {data.sender.name}
          </div>
          <div className="text-xs text-gray-400">
            {format(new Date(data.createdAt),'p')}
          </div>
        </div>
        <div className={message}>
          {data.image 
          ? <Image className="object-cover cursor-pointer hover:scale-110 transition translate" src={data.image} alt="Image" width='288' height='288'/>
          : <div>{data.body}</div>}
        </div>
        {isLast && isOwn && seenList.length > 0 &&
        (
          <div className="text-xs font-light text-gray-500">
            {`Seen by ${seenList}`}
          </div>
        )}
      </div>
    </div>
)
}