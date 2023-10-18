'use client'

import { cn } from "@/lib/utils"
import { Button } from "./ui/Button"
import { useState } from "react"
import {signIn} from 'next-auth/react'
import { Icons } from "./Incons"
import { useToast } from "@/hooks/use-toast"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {toast} = useToast()

  const loginWithGoogle = async () => {
    setIsLoading(true)

    try {
      throw new Error()
      await signIn('google')
    } catch (error) {
      //toast notification
      toast({
        title:'There was a problem',
        description:'There was an error logging in with Google',
        variant:'destructive'
      })
    }
    finally {
      setIsLoading(false)
    }
  }
  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button className="w-full" size="sm" onClick={loginWithGoogle} isLoading={isLoading}>
        {isLoading ? null : <Icons.google className="w-4 h-4 mr-2"/>}
        Google
      </Button>
    </div>
  )
}
