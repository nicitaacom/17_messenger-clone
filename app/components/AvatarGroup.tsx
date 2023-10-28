'use client'
import { User } from "@prisma/client"
import Image from "next/image"
	

interface AvatarGroupProps {
users?:User[]
}

export default function AvatarGroup ({users=[]}:AvatarGroupProps) {

  const slicedUsers = users?.slice(0,3)

  const positionMap = {
    0:'top-0 left-[12px]',
    1:'bottom-0',
    2:'bottom-0 right-0'
  }

return (
    <div className="relative w-11 h-11">
      {slicedUsers?.map((user,index) => (
        <div className={`absolute inline-block rounded-full overflow-hidden w-[21px] h-[21px] 
        ${positionMap[index as keyof typeof positionMap]}`} key={user.id}>
          <Image src={user?.image || '/images/placeholder.jpg'} alt='Avatar' fill/>
        </div>
      ))}
    </div>
)
}