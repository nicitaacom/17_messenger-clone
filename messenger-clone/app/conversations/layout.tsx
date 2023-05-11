import Sidebar from "@/app/components/sidebar/Sidebar";
import ConversationList from "../api/conversations/components/Conversation";
import getConversations from "../actions/getConversation";

export default async function ConversationLayout({children}:{children:React.ReactNode}) {
  const conversations = await getConversations()
  return (
    //@ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={[conversations]}/>
        {children}
      </div>
    </Sidebar>
  )
}