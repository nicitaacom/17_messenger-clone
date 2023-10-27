import DesktopSidebar from "../components/DesktopSidebar";
import Sidebar from "../components/sidebar/Sidebar";

export default async function UsersLayout({children}:{children:React.ReactNode}) {
  return (
    <Sidebar>
    <div className="h-full">
      <DesktopSidebar/>
      <main className="lg:pl-20 h-full">  

      {children}
      </main>
    </div>
    </Sidebar>
  )
}