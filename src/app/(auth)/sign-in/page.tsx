import SignIn from "@/components/SignIn";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Page () {
return (
    <div className="absolute inset-0">
<div className="h-full max-w-2xl mx-auto flex flex-col justify-center items-center gap-20">
  <Link className={cn(buttonVariants({variant:'ghost'}),'self-start -mt-20')} href='/'>Home</Link>
  <SignIn/>
</div>
    </div>
)
}