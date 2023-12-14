import Link from "next/link";
import { ThemeToggle } from "../../theme/ThemeToggle";


export const Header = async () => {

  return (
    
    <header className="border-b border-b-accent fixed top-0 left-0 right-0 bg-slate-100/60 shadow-lg shadow-black/5 backdrop-blur-lg  dark:bg-black/70 dark:shadow-black/10">
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div style={{transform: "translateX(258.547px) translateZ(0px)"}} className="absolute -bottom-3 -left-10 h-6 w-20 rounded-full bg-white/70 opacity-0 blur-lg transition-opacity duration-200 group-hover:opacity-100 dark:bg-white/30">

        </div>
      </div>
      <div className="container flex items-center py-3 w-full px-6 sm:px-8 lg:px-12  max-w-screen-xl m-auto gap-1">
        <h1 className="text-2xl font-bold mr-auto">Upply</h1>
        <div className="mr-5 flex flex-row gap-5">

        {/* <div className="group fixed top-6 flex h-12 items-center rounded-3xl border border-slate-200 bg-slate-100/60 pr-1.5 shadow-lg shadow-black/5 backdrop-blur-lg dark:border-slate-700 dark:bg-black/70 dark:shadow-black/10 lg:top-10">

</div> */}
          <ul className="relative flex items-center space-x-4 pl-4">
            <li className="relative cursor-pointer">
              <Link href="#about" className="relative flex h-7 items-center rounded px-2 font-bold focus:bg-white/30 focus:outline-none dark:focus:bg-white/10 text-slate-600 hover:text-black dark:text-slate-300 dark:hover:text-white">
              About
              </Link>
            </li>
            <li className="relative cursor-pointer">
              <Link href="#process" className="relative flex h-7 items-center rounded px-2 font-bold focus:bg-white/30 focus:outline-none dark:focus:bg-white/10 text-slate-600 hover:text-black dark:text-slate-300 dark:hover:text-white">
              Process
              </Link>
            </li>
            <li className="relative cursor-pointer">
              <Link href="#work" className="relative flex h-7 items-center rounded px-2 font-bold focus:bg-white/30 focus:outline-none dark:focus:bg-white/10 text-slate-600 hover:text-black dark:text-slate-300 dark:hover:text-white">
              Work
              </Link>
            </li>
            <li className="relative cursor-pointer">
              <Link href="#pricing" className="relative flex h-7 items-center rounded px-2 font-bold focus:bg-white/30 focus:outline-none dark:focus:bg-white/10 text-slate-600 hover:text-black dark:text-slate-300 dark:hover:text-white">
              Pricing
              </Link>
            </li>
          </ul>
        <ThemeToggle />
        
        </div>
      </div>
    </header>
  );
};
