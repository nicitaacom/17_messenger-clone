import prisma from '@/app/libs/prismadb'

const getMessages = async (conversationId:string) => {
 try {
   const messages = await prisma.message.findMany({
    where:{
      conversationId:conversationId
    },
    include:{
      sender:true,
      seen:true
    },
    orderBy:{
      createdAt:'desc'
    }
  })
  return messages
 } catch (error:unknown) {
  return []
 }
}

export default getMessages