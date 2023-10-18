import Link from 'next/link'
import { Icons } from "./Incons"
import { buttonVariants } from "./ui/Button"

export default function Navbar () {
return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
<Icons.logo className="w-8 h-8 sm:w-6 sm:h-6"/>
        <Link className="flex gap-2 items-center" href='/'>
          <p className="hidden text-zinc-700 text-sm font-medium md:block">Breddit</p>
        </Link>

        {/* search bar */}
      
      <Link className={buttonVariants()} href='sign-in'>Sign in</Link>
      </div>
    </div>
)
}