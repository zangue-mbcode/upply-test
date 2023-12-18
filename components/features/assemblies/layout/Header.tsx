import Link from "next/link";
import { ThemeToggle } from "../../theme/ThemeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/public/logo.svg";


export const Header = async () => {

  return (
    
    <header className="border-b border-b-accent fixed top-0 left-0 right-0 bg-white-900  backdrop-blur-2xl  dark:bg-black/70 ">
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div style={{transform: "translateX(258.547px) translateZ(0px)"}} className="absolute -bottom-3 -left-10 h-6 w-20 rounded-full bg-white-400 opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-100 dark:bg-white-500">

        </div>
      </div>
      <div className="container flex items-center justify-between py-3 w-full px-6 sm:px-8 lg:px-12  max-w-screen-xl m-auto gap-1">
        <div className="flex flex-row gap-10">
              <Link href="/" className="relative flex h-7 items-center rounded ml-[20px] text-[16px]  focus:bg-white/30 focus:outline-none dark:focus:bg-white/10 text-[#666] hover:text-[#000] dark:text-slate-300 dark:hover:text-white ">
                <Image src={logo} alt="Logo"/>
                </Link>
          <div className=" hidden md:block">
          <ul className="relative flex items-center space-x-4 pl-4">
              <li className="relative cursor-pointer">
                <Link href="#about" className="relative flex h-7 items-center rounded ml-[20px] text-[16px]  focus:bg-white/30 focus:outline-none dark:focus:bg-white/10 text-[#666] hover:text-[#000] dark:text-slate-300 dark:hover:text-white ">
                About
                </Link>
              </li>
              <li className="relative cursor-pointer">
                <Link href="#process" className="relative flex h-7 items-center rounded ml-[20px] text-[16px]  focus:bg-white/30 focus:outline-none dark:focus:bg-white/10 text-[#666] hover:text-[#000] dark:text-slate-300 dark:hover:text-white">
                Process
                </Link>
              </li>
              <li className="relative cursor-pointer">
                <Link href="#work" className="relative flex h-7 items-center rounded ml-[20px] text-[16px]  focus:bg-white/30 focus:outline-none dark:focus:bg-white/10 text-[#666] hover:text-[#000] dark:text-slate-300 dark:hover:text-white">
                Work
                </Link>
              </li>
              <li className="relative cursor-pointer">
                <Link href="#pricing" className="relative flex h-7 items-center rounded ml-[20px] text-[16px]  focus:bg-white/30 focus:outline-none dark:focus:bg-white/10 text-[#666] hover:text-[#000] dark:text-slate-300 dark:hover:text-white">
                Pricing
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="mr-5 flex flex-row gap-5">
        <div className=" hidden md:block">
          <div className="flex items-center space-x-4">
            <Link href="/" className={cn(buttonVariants({ variant: 'default' }), "cursor-pointer" )}>
              Login
            </Link>
            <Link href="/" className={cn(buttonVariants({ variant: 'outline' }), "scursor-pointer" )}>
            Register
            </Link>
            
            
          </div>
        </div>
       
          
        <ThemeToggle />
        
        </div>
      </div>
    </header>
  );
};
