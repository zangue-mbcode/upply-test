import { Fingerprint } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <section className='pt-3 w-full'>
        <div className='relative z-10 mx-auto -mb-4 w-full'>
            <div className='absolute w-full h-8 w-14 bg-white blur-lg dark:bg-[#0E1117] dark:blur-md' style={{borderRadius:"50% 50%"}}>

            </div>
            <div className='relative border-t w-full border-slate-200 pb-12 dark:border-slate-700 sm:pb-16 md:pb-32'>
                <div className='absolute inset-0 overflow-hidden'>
                  <div className='mx-auto -mt-48 h-96 w-full max-w-screen-xl bg-[#F9FAFB] blur-3xl dark:bg-[#15191F] sm:blur-4xl' style={{borderRadius:"50% 50%"}}>

                  </div>
                </div>
                <div className='relative mx-auto mt-12 flex w-full max-w-screen-xl flex-col items-stretch justify-between px-6 text-sm text-slate-400 dark:text-slate-500 sm:-mt-8 sm:flex-row sm:space-y-0 sm:px-8 lg:px-12'>
                  <div className='order-2 mt-12 sm:order-1 sm:mt-16 flex flex-col justify-between'>
                    <p className='font-mono text-xs uppercase'>© Upply 2023</p>
                    <Link href="/" className='cursor-pointer mt-4 flex items-center gap-2 sm:text-base text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-300'>
                      <Fingerprint className='h-4 w-4' />
                      <span>Cookies & Data</span>
                    </Link>
                  </div>
                  <div className='order-1 flex space-x-8 sm:order-2 sm:space-x-16'>
                      <div>
                        <h4 className='mb-6 text-xs font-bold uppercase tracking-wider text-indigo-500/70 dark:text-indigo-400/70 sm:mb-12'>
                        Frontend
                        </h4>
                        <ul className='space-y-2'>
                          <li>
                            <Link href="/" className='hover:text-slate-500 dark:hover:text-slate-400' >Start</Link>
                          </li>
                          <li>
                            <Link href="/" className='hover:text-slate-500 dark:hover:text-slate-400' >About</Link>
                          </li>
                          <li>
                            <Link href="/" className='hover:text-slate-500 dark:hover:text-slate-400' >Process</Link>
                          </li>
                          <li>
                            <Link href="/" className='hover:text-slate-500 dark:hover:text-slate-400' >Work</Link>
                          </li>
                          <li>
                            <Link href="/" className='hover:text-slate-500 dark:hover:text-slate-400' >Pricing</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className='mb-6 text-xs font-bold uppercase tracking-wider text-indigo-500/70 dark:text-indigo-400/70 sm:mb-12'>
                        More
                        </h4>
                        <ul className='space-y-2'>
                          <li>
                            <Link href="/" className='hover:text-slate-500 dark:hover:text-slate-400' >Schedule a Call</Link>
                          </li>
                          <li>
                            <Link href="/" className='hover:text-slate-500 dark:hover:text-slate-400' >Blog</Link>
                          </li>
                          <li>
                            <Link href="/" className='hover:text-slate-500 dark:hover:text-slate-400' >Work</Link>
                          </li>
                          <li>
                            <Link href="/" className='hover:text-slate-500 dark:hover:text-slate-400' >Hardware</Link>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className='mb-6 text-xs font-bold uppercase tracking-wider text-indigo-500/70 dark:text-indigo-400/70 sm:mb-12'>
                        Legal
                        </h4>
                        <ul className='space-y-2'>
                          <li>
                            <Link href="/" className='hover:text-slate-500 dark:hover:text-slate-400' >Contact</Link>
                          </li>
                          <li>
                            <Link href="/" className='hover:text-slate-500 dark:hover:text-slate-400' >Legal Information</Link>
                          </li>
                          <li>
                            <Link href="/" className='hover:text-slate-500 dark:hover:text-slate-400' >Privacy Policy</Link>
                          </li>
                        </ul>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  );
};
