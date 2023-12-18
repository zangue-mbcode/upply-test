'use client';

import React, { ReactNode, useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion, useCycle } from 'framer-motion';
import { SideNavItem } from '@/constants/SideNavItemType';
import { SIDENAV_ITEMS } from '@/constants/SideNavItem';
import { ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

type MenuItemWithSubMenuProps = {
  item: SideNavItem;
  toggleOpen: () => void;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const HeaderMobile = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { theme } = useTheme();

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      className={`fixed inset-0 z-50 w-full md:hidden ${
        isOpen ? '' : 'pointer-events-none'
      }`}
      ref={containerRef}
    >
      <motion.div
        className={clsx("absolute inset-0 right-0 w-full border border-slate-200 bg-white p-4 py-6 shadow-lg shadow-black/5 dark:border-slate-700 dark:bg-black dark:shadow-black/10 sm:inset-x-6" )}
        variants={sidebar}
      />
      <motion.ul
        variants={variants}
        className="absolute grid w-full gap-3 px-5 py-3"
      >
        {/* <motion.li variants={MenuItemVariants} className="">
        <h1 className="text-2xl font-bold mr-auto">Upply</h1>
        </motion.li> */}

        <motion.li onClick={() => toggleOpen()} variants={MenuItemVariants} className="mt-[100px] w-full flex justify-center">
          <Link href="#about" className="relative flex h-7 items-center text-center rounded px-2 font-bold focus:bg-white/30 focus:outline-none dark:focus:bg-white/10 text-slate-600 hover:text-black dark:text-slate-300 dark:hover:text-white">
                About
          </Link>
        </motion.li>

        <motion.li onClick={() => toggleOpen()} variants={MenuItemVariants} className="w-full flex justify-center">
        <Link href="#process" className="relative flex h-7 items-center text-center rounded px-2 font-bold focus:bg-white/30 focus:outline-none dark:focus:bg-white/10 text-slate-600 hover:text-black dark:text-slate-300 dark:hover:text-white">
                Process
                </Link>
        </motion.li>
        <motion.li onClick={() => toggleOpen()} variants={MenuItemVariants} className="w-full flex justify-center">
        <Link href="#work" className="relative flex h-7 items-center text-center rounded px-2 font-bold focus:bg-white/30 focus:outline-none dark:focus:bg-white/10 text-slate-600 hover:text-black dark:text-slate-300 dark:hover:text-white">
                Work
                </Link>
        </motion.li>
        <motion.li onClick={() => toggleOpen()} variants={MenuItemVariants} className="w-full flex justify-center">
        <Link href="#pricing" className="relative flex h-7 items-center text-center rounded px-2 font-bold focus:bg-white/30 focus:outline-none dark:focus:bg-white/10 text-slate-600 hover:text-black dark:text-slate-300 dark:hover:text-white">
                Pricing
                </Link>
        </motion.li>

        <motion.li onClick={() => toggleOpen()} variants={MenuItemVariants} className="w-full flex justify-center mt-10">
        <Link href="/" className={cn(buttonVariants({ variant: 'default' }), "w-full cursor-pointer" )}>
              Login
            </Link>
        </motion.li>
        <motion.li onClick={() => toggleOpen()} variants={MenuItemVariants} className="w-full flex justify-center">
        <Link href="/" className={cn(buttonVariants({ variant: 'outline' }), "w-full cursor-pointer" )}>
            Register
            </Link>
        </motion.li>
        
        
      </motion.ul>
      <MenuToggle toggle={toggleOpen} color={theme === 'light' ? "#000000" : "#ffffff"} />
    </motion.nav>
  );
};

export default HeaderMobile;

const MenuToggle = ({ toggle, color }: { toggle: any, color: string  }) => (
  <button
    onClick={toggle}
    className="pointer-events-auto absolute right-4 top-[20px] z-30"
  >
    <svg fill='transparent' className='fill-current h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <Path
    stroke={color}
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
    stroke={color}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
    stroke={color}
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    strokeLinecap="round"
    {...props}
  />
);

const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({
  item,
  toggleOpen,
}) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <MenuItem>
        <button
          className="flex w-full text-2xl"
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <div className="flex flex-row justify-between w-full items-center">
            <span
              className={`${pathname?.includes(item.path) ? 'font-bold' : ''}`}
            >
              {item.title}
            </span>
            <div className={`${subMenuOpen && 'rotate-180'}`}>
              <ChevronDown width="24" height="24" />
            </div>
          </div>
        </button>
      </MenuItem>
      <div className="mt-2 ml-2 flex flex-col space-y-2">
        {subMenuOpen && (
          <>
            {item.subMenuItems?.map((subItem: any, subIdx: any) => {
              return (
                <MenuItem key={subIdx}>
                  <Link
                    href={subItem.path}
                    onClick={() => toggleOpen()}
                    className={` ${
                      subItem.path === pathname ? 'font-bold' : ''
                    }`}
                  >
                    {subItem.title}
                  </Link>
                </MenuItem>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
    
  }, [ref]);

  return dimensions.current;
};