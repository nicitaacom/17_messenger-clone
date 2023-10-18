import Navbar from "@/components/Navbar"
import { Toaster } from "@/components/ui/Toaster"
import { cn } from "@/lib/utils"
import '@/styles/globals.css'
import {Inter} from 'next/font/google'

export const metadata = {
  title: 'Breadit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}

const inter = Inter({subsets:['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={cn('bg-white text-slate antialiased light',inter.className)}>
      <body className="min-w-screeen pt-12 bg-slate-50 antialiased">
        <Navbar/>
        <div className="container max-w-7xl mx-auto h-full pt-12">  
          {children}
        </div>
        <Toaster/>
        </body>
    </html>
  )
}
