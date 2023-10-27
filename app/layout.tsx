import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "react-hot-toast"
import ToasterContext from "./context/ToasterContext"
import AuthContext from "./context/AuthContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Messenger clone",
  description: "Messenger clone",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
