"use client"

import { signOut } from "next-auth/react"
import EmptyState from "../components/EmptyState"

export default function Page() {
  return <button className="hidden lg:block lg:pl-80 h-full">
    <EmptyState/>
  </button>
}
