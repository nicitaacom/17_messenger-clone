import Link from "next/link"
import { Icons } from "./Incons"
import UserAuthForm from "./UserAuthForm"

export default function SingIn() {
  return (
    <div className="container mx-auto flex flex-col justify-center w-full space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto w-6 h-6" />
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a Breddit account and agree to our User Agreement and Privacy Policy.
        </p>

        {/* Sign in form */}
        <UserAuthForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          New to breddit?
          <Link className="hover:text-zinc-800 text-sm underline underline-offset-4" href="sign-up">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
