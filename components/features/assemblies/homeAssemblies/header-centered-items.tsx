
'use client';

import { Button } from "@/components/ui/button";
import { motion, useCycle } from 'framer-motion';
import Image from "next/image";
import { useState } from "react";
import brand1 from "@/public/contentlayer-black.svg"
import brandWhite from "@/public/contentlayer-white.svg"
import aboutDark from "@/public/urlbox-contentlayer-dark.webp"
import aboutWhite from "@/public/urlbox-contentlayer-light.webp"
import bgGrid from "@/public/background-grid.webp"
import requestBg from "@/public/request-background.webp"
import requestCard from "@/public/request-card.webp"
import effectDark from "@/public/effect-dark.webp"
import effectLight from "@/public/effect-light.webp"
import clearystDark from "@/public/clearyst-dark.webp"
import clearystLight from "@/public/clearyst-light.webp"

export const HeaderCenteredItems = async () => {
    const [isHovered, setHovered] = useState(false)
    const [isHovered1, setHovered1] = useState(false)

  return (
    <div className="w-full">
        <div className="w-full pt-[200px] pb-[60px] backdrop-blur-lg backdrop-saturate-150 bg-background/70 flex justify-center">
            <div className="w-full flex flex-col justify-center max-w-[800px] gap-[25px]">
                <h1 className="text-center text-black dark:text-white font-display font-extrabold leading-tight text-3xl sm:text-4xl lg:text-5xl dark:drop-shadow-lg">Your Next-Level SaaS Website is only one click away</h1>
                <p className="text-center paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-lg mt-8 lg:mt-12">
                    <span>The first ever</span> &nbsp;
                    <b>design and development subscription</b>&nbsp;
                    <span>for SaaS companies. Get</span>&nbsp;
                    <b>highly detailed designs and modern frontend development</b>&nbsp;
                    <span>without hiring an in-house team.</span>
                </p>
                <div className="flex justify-center gap-5">
                    <motion.div
                        onHoverStart={() => setHovered(true)}
                        onHoverEnd={() => setHovered(false)}
                    >
                        <Button variant="default" className="rounded-full">
                            <span>Get Started</span>
                        </Button>
                        <span>
                       
                        </span>
                    </motion.div>
                    <motion.div
                        onHoverStart={() => setHovered1(true)}
                        onHoverEnd={() => setHovered1(false)}
                    >
                        <Button variant="outline" className="rounded-full">
                            <span>Schedule a Call</span>
                        </Button>
                    </motion.div>
                    
                    
                </div>
            </div>
        </div>

        <section className="relative mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:px-12  pb-12 lg:pb-16 mt-10">
            <div className="relative overflow-x-hidden lg:-mx-16">
                <div>
                    <div className="flex animate-scroll py-4">
                        <div className="shrink-0 relative h-8 w-64" style={{scale:"0.8"}}>
                            <Image src={brand1} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >

                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >

                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >

                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >

                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >

                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >

                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >

                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >

                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >

                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >

                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >

                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >

                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >

                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >

                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >

                            </Image>
                            <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                            className="object-center object-contain hidden dark:block"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            
                            >
                            </Image>
                        </div>
                    </div>
                </div>
                <div className="absolute h-full w-32 top-0 left-0 bg-gradient-to-r from-white dark:from-[#0E1117]">

                </div>
                <div className="absolute h-full w-32 top-0 right-0 bg-gradient-to-l from-white dark:from-[#0E1117]">

                </div>
            </div>
        </section>


        <div className="relative border-t border-slate-200 dark:border-slate-700">
            <div className="absolute inset-x-0 top-0 h-96 overflow-hidden">
                <div className="mx-auto -mt-48 h-96 w-full max-w-screen-xl bg-[#F9FAFB] blur-3xl dark:bg-[#15191F] sm:blur-4xl"
                style={{borderRadius:"50% 50%"}}>

                </div>
            </div>
        </div>


        <section className="relative mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:px-12  pt-16 lg:pt-24">
            <div className="grid grid-cols-1 gap-12 lg:gap-x-16 md:grid-cols-2 lg:grid-cols-3">
                <div  className="shadow-xl p-4 rounded-xl flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
                    <div className="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
                        <div className="relative group w-14 h-14">
                            <div className="absolute inset-x-5 h-2 bottom-0 bg-rose-400 blur-md opacity-50"></div>
                            <div className="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
                                <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-md dark:opacity-80"></div>
                                <div className="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
                                    <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-lg dark:opacity-80"></div>
                                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3309 0.5C32.7053 0.5 32.0937 0.685189 31.5731 1.03223L23.1081 6.67555C20.781 8.22699 18.681 10.0782 16.8587 12.1743C20.3833 13.775 23.2249 16.6166 24.8256 20.1413C26.9217 18.319 28.7729 16.219 30.3244 13.8918L35.9677 5.42681C36.3147 4.90625 36.4999 4.29462 36.4999 3.66898C36.4999 1.9188 35.0811 0.5 33.3309 0.5ZM19.4991 23.8748C20.7967 23.154 22.0372 22.3438 23.2127 21.4519C21.7926 17.981 19.019 15.2073 15.548 13.7872C14.6561 14.9627 13.8459 16.2033 13.1251 17.5008L12.6609 18.3364C15.555 19.1642 17.8358 21.4449 18.6636 24.339L19.4991 23.8748ZM10.2499 20.5C6.79811 20.5 3.99992 23.2982 3.99992 26.75C3.99992 28.1307 2.88064 29.25 1.49992 29.25C1.44332 29.25 1.38698 29.2481 1.331 29.2444C0.870745 29.214 0.431136 29.4395 0.187363 29.8311C-0.0564093 30.2226 -0.0647234 30.7167 0.165734 31.1162C1.6754 33.7336 4.50561 35.5 7.74992 35.5C12.5824 35.5 16.4999 31.5825 16.4999 26.75C16.4999 23.2982 13.7017 20.5 10.2499 20.5Z" fill="#9EFF00"/>
                                    </svg>
                                </div>
                            </div>
                            
                        </div>
                        <h3 className="text-black dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm undefined">
                           <span>
                           Struggling to keep<br />your site up-to-date?
                           </span>
                           
                        </h3>
                    </div>
                    <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base max-w-md">
                    When your product evolves, it can be hard to keep your website up-to-date whilst maintaining highest design standards.
                    </p>
                </div>
                <div  className="shadow-xl p-4 rounded-xl flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
                    <div className="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
                        <div className="relative group w-14 h-14">
                            <div className="absolute inset-x-5 h-2 bottom-0 bg-rose-400 blur-md opacity-50"></div>
                            <div className="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
                                <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-md dark:opacity-80"></div>
                                <div className="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
                                    <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-lg dark:opacity-80"></div>
                                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3309 0.5C32.7053 0.5 32.0937 0.685189 31.5731 1.03223L23.1081 6.67555C20.781 8.22699 18.681 10.0782 16.8587 12.1743C20.3833 13.775 23.2249 16.6166 24.8256 20.1413C26.9217 18.319 28.7729 16.219 30.3244 13.8918L35.9677 5.42681C36.3147 4.90625 36.4999 4.29462 36.4999 3.66898C36.4999 1.9188 35.0811 0.5 33.3309 0.5ZM19.4991 23.8748C20.7967 23.154 22.0372 22.3438 23.2127 21.4519C21.7926 17.981 19.019 15.2073 15.548 13.7872C14.6561 14.9627 13.8459 16.2033 13.1251 17.5008L12.6609 18.3364C15.555 19.1642 17.8358 21.4449 18.6636 24.339L19.4991 23.8748ZM10.2499 20.5C6.79811 20.5 3.99992 23.2982 3.99992 26.75C3.99992 28.1307 2.88064 29.25 1.49992 29.25C1.44332 29.25 1.38698 29.2481 1.331 29.2444C0.870745 29.214 0.431136 29.4395 0.187363 29.8311C-0.0564093 30.2226 -0.0647234 30.7167 0.165734 31.1162C1.6754 33.7336 4.50561 35.5 7.74992 35.5C12.5824 35.5 16.4999 31.5825 16.4999 26.75C16.4999 23.2982 13.7017 20.5 10.2499 20.5Z" fill="#9EFF00"/>
                                    </svg>
                                </div>
                            </div>
                            
                        </div>
                        <h3 className="text-black dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm undefined">
                           <span>
                           Struggling to keep<br />your site up-to-date?
                           </span>
                           
                        </h3>
                    </div>
                    <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base max-w-md">
                    When your product evolves, it can be hard to keep your website up-to-date whilst maintaining highest design standards.
                    </p>
                </div>
                <div  className="shadow-xl p-4 rounded-xl flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
                    <div className="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
                        <div className="relative group w-14 h-14">
                            <div className="absolute inset-x-5 h-2 bottom-0 bg-rose-400 blur-md opacity-50"></div>
                            <div className="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
                                <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-md dark:opacity-80"></div>
                                <div className="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
                                    <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-lg dark:opacity-80"></div>
                                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3309 0.5C32.7053 0.5 32.0937 0.685189 31.5731 1.03223L23.1081 6.67555C20.781 8.22699 18.681 10.0782 16.8587 12.1743C20.3833 13.775 23.2249 16.6166 24.8256 20.1413C26.9217 18.319 28.7729 16.219 30.3244 13.8918L35.9677 5.42681C36.3147 4.90625 36.4999 4.29462 36.4999 3.66898C36.4999 1.9188 35.0811 0.5 33.3309 0.5ZM19.4991 23.8748C20.7967 23.154 22.0372 22.3438 23.2127 21.4519C21.7926 17.981 19.019 15.2073 15.548 13.7872C14.6561 14.9627 13.8459 16.2033 13.1251 17.5008L12.6609 18.3364C15.555 19.1642 17.8358 21.4449 18.6636 24.339L19.4991 23.8748ZM10.2499 20.5C6.79811 20.5 3.99992 23.2982 3.99992 26.75C3.99992 28.1307 2.88064 29.25 1.49992 29.25C1.44332 29.25 1.38698 29.2481 1.331 29.2444C0.870745 29.214 0.431136 29.4395 0.187363 29.8311C-0.0564093 30.2226 -0.0647234 30.7167 0.165734 31.1162C1.6754 33.7336 4.50561 35.5 7.74992 35.5C12.5824 35.5 16.4999 31.5825 16.4999 26.75C16.4999 23.2982 13.7017 20.5 10.2499 20.5Z" fill="#9EFF00"/>
                                    </svg>
                                </div>
                            </div>
                            
                        </div>
                        <h3 className="text-black dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm undefined">
                           <span>
                           Struggling to keep<br />your site up-to-date?
                           </span>
                           
                        </h3>
                    </div>
                    <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base max-w-md">
                    When your product evolves, it can be hard to keep your website up-to-date whilst maintaining highest design standards.
                    </p>
                </div>
                
            </div>
        </section>


        <div className="overflow-x-hidden">
            <section className="relative mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:px-12  group pt-24 lg:pt-48 grid grid-cols-1 gap-y-24 md:grid-cols-2">
                <div className="md:pr-4 md:pb-8">
                    <h2 className="text-black dark:text-white font-display font-extrabold leading-tight text-2xl lg:text-3xl dark:drop-shadow-md undefined">
                        <span>
                        Focus on your product – <br />let us handle your website
                        </span>
                    </h2>
                    <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base mt-7 max-w-lg">
                    We&apos;ll take care of designing your <b>top-tier website</b>
                    including graphics, animations and docs pages. And we&apos;ll build it out using the 
                    <b>latest frontend technologies</b>
                    – no Webflow, no Framer.
                    </p>
                </div>
                <div className="relative flex flex-col justify-end">
                    <div className="absolute -inset-x-24 bottom-0 overflow-hidden">
                        <div style={{borderRadius:"50% 50%"}} className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-indigo-400 w-3/4 h-1/2 blur-3xl transition-opacity duration-500 opacity-50 group-hover:opacity-80">

                        </div>
                        <Image src={bgGrid} alt="" className="w-full opacity-50 text-transparent" width="1920" height="1080">

                        </Image>
                    </div>
                    <Image  src={aboutWhite} alt="" className="dark:hidden relative w-full" width="1200" height="748"></Image>
                    <Image  src={aboutDark} alt="" className="hidden dark:block relative w-full" width="1200" height="748"></Image>
                </div>
            </section>
        </div>


        <div className="relative border-t border-slate-200 dark:border-slate-700">
            <div className="absolute inset-x-0 top-0 h-96 overflow-hidden">
                <div  style={{borderRadius:"50% 50%"}} className="mx-auto -mt-48 h-96 w-full max-w-screen-xl bg-[#F9FAFB] blur-3xl dark:bg-[#15191F] sm:blur-4xl">

                </div>
            </div>
        </div>


        <section className="relative mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:px-12  pt-16 lg:pt-24">
            <div className="grid grid-cols-1 gap-12 lg:gap-x-16 md:grid-cols-2 lg:grid-cols-3">
            <div  className="shadow-xl p-4 rounded-xl flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
                    <div className="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
                        <div className="relative group w-14 h-14">
                            <div className="absolute inset-x-5 h-2 bottom-0 bg-rose-400 blur-md opacity-50"></div>
                            <div className="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
                                <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-md dark:opacity-80"></div>
                                <div className="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
                                    <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-lg dark:opacity-80"></div>
                                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3309 0.5C32.7053 0.5 32.0937 0.685189 31.5731 1.03223L23.1081 6.67555C20.781 8.22699 18.681 10.0782 16.8587 12.1743C20.3833 13.775 23.2249 16.6166 24.8256 20.1413C26.9217 18.319 28.7729 16.219 30.3244 13.8918L35.9677 5.42681C36.3147 4.90625 36.4999 4.29462 36.4999 3.66898C36.4999 1.9188 35.0811 0.5 33.3309 0.5ZM19.4991 23.8748C20.7967 23.154 22.0372 22.3438 23.2127 21.4519C21.7926 17.981 19.019 15.2073 15.548 13.7872C14.6561 14.9627 13.8459 16.2033 13.1251 17.5008L12.6609 18.3364C15.555 19.1642 17.8358 21.4449 18.6636 24.339L19.4991 23.8748ZM10.2499 20.5C6.79811 20.5 3.99992 23.2982 3.99992 26.75C3.99992 28.1307 2.88064 29.25 1.49992 29.25C1.44332 29.25 1.38698 29.2481 1.331 29.2444C0.870745 29.214 0.431136 29.4395 0.187363 29.8311C-0.0564093 30.2226 -0.0647234 30.7167 0.165734 31.1162C1.6754 33.7336 4.50561 35.5 7.74992 35.5C12.5824 35.5 16.4999 31.5825 16.4999 26.75C16.4999 23.2982 13.7017 20.5 10.2499 20.5Z" fill="#9EFF00"/>
                                    </svg>
                                </div>
                            </div>
                            
                        </div>
                        <h3 className="text-black dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm undefined">
                           <span>
                           Struggling to keep<br />your site up-to-date?
                           </span>
                           
                        </h3>
                    </div>
                    <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base max-w-md">
                    When your product evolves, it can be hard to keep your website up-to-date whilst maintaining highest design standards.
                    </p>
                </div>
                <div  className="shadow-xl p-4 rounded-xl flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
                    <div className="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
                        <div className="relative group w-14 h-14">
                            <div className="absolute inset-x-5 h-2 bottom-0 bg-rose-400 blur-md opacity-50"></div>
                            <div className="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
                                <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-md dark:opacity-80"></div>
                                <div className="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
                                    <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-lg dark:opacity-80"></div>
                                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3309 0.5C32.7053 0.5 32.0937 0.685189 31.5731 1.03223L23.1081 6.67555C20.781 8.22699 18.681 10.0782 16.8587 12.1743C20.3833 13.775 23.2249 16.6166 24.8256 20.1413C26.9217 18.319 28.7729 16.219 30.3244 13.8918L35.9677 5.42681C36.3147 4.90625 36.4999 4.29462 36.4999 3.66898C36.4999 1.9188 35.0811 0.5 33.3309 0.5ZM19.4991 23.8748C20.7967 23.154 22.0372 22.3438 23.2127 21.4519C21.7926 17.981 19.019 15.2073 15.548 13.7872C14.6561 14.9627 13.8459 16.2033 13.1251 17.5008L12.6609 18.3364C15.555 19.1642 17.8358 21.4449 18.6636 24.339L19.4991 23.8748ZM10.2499 20.5C6.79811 20.5 3.99992 23.2982 3.99992 26.75C3.99992 28.1307 2.88064 29.25 1.49992 29.25C1.44332 29.25 1.38698 29.2481 1.331 29.2444C0.870745 29.214 0.431136 29.4395 0.187363 29.8311C-0.0564093 30.2226 -0.0647234 30.7167 0.165734 31.1162C1.6754 33.7336 4.50561 35.5 7.74992 35.5C12.5824 35.5 16.4999 31.5825 16.4999 26.75C16.4999 23.2982 13.7017 20.5 10.2499 20.5Z" fill="#9EFF00"/>
                                    </svg>
                                </div>
                            </div>
                            
                        </div>
                        <h3 className="text-black dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm undefined">
                           <span>
                           Struggling to keep<br />your site up-to-date?
                           </span>
                           
                        </h3>
                    </div>
                    <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base max-w-md">
                    When your product evolves, it can be hard to keep your website up-to-date whilst maintaining highest design standards.
                    </p>
                </div>
                <div  className="shadow-xl p-4 rounded-xl flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
                    <div className="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
                        <div className="relative group w-14 h-14">
                            <div className="absolute inset-x-5 h-2 bottom-0 bg-rose-400 blur-md opacity-50"></div>
                            <div className="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
                                <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-md dark:opacity-80"></div>
                                <div className="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
                                    <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-lg dark:opacity-80"></div>
                                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3309 0.5C32.7053 0.5 32.0937 0.685189 31.5731 1.03223L23.1081 6.67555C20.781 8.22699 18.681 10.0782 16.8587 12.1743C20.3833 13.775 23.2249 16.6166 24.8256 20.1413C26.9217 18.319 28.7729 16.219 30.3244 13.8918L35.9677 5.42681C36.3147 4.90625 36.4999 4.29462 36.4999 3.66898C36.4999 1.9188 35.0811 0.5 33.3309 0.5ZM19.4991 23.8748C20.7967 23.154 22.0372 22.3438 23.2127 21.4519C21.7926 17.981 19.019 15.2073 15.548 13.7872C14.6561 14.9627 13.8459 16.2033 13.1251 17.5008L12.6609 18.3364C15.555 19.1642 17.8358 21.4449 18.6636 24.339L19.4991 23.8748ZM10.2499 20.5C6.79811 20.5 3.99992 23.2982 3.99992 26.75C3.99992 28.1307 2.88064 29.25 1.49992 29.25C1.44332 29.25 1.38698 29.2481 1.331 29.2444C0.870745 29.214 0.431136 29.4395 0.187363 29.8311C-0.0564093 30.2226 -0.0647234 30.7167 0.165734 31.1162C1.6754 33.7336 4.50561 35.5 7.74992 35.5C12.5824 35.5 16.4999 31.5825 16.4999 26.75C16.4999 23.2982 13.7017 20.5 10.2499 20.5Z" fill="#9EFF00"/>
                                    </svg>
                                </div>
                            </div>
                            
                        </div>
                        <h3 className="text-black dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm undefined">
                           <span>
                           Struggling to keep<br />your site up-to-date?
                           </span>
                           
                        </h3>
                    </div>
                    <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base max-w-md">
                    When your product evolves, it can be hard to keep your website up-to-date whilst maintaining highest design standards.
                    </p>
                </div>
            </div>
        </section>


        <section className="relative mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:px-12  undefined">
            <div className="lg:sticky lg:-top-8 pt-24 lg:pt-48 mb-12 lg:mb-16">
                <h2 className="text-black dark:text-white font-display font-extrabold leading-tight text-3xl sm:text-4xl lg:text-5xl dark:drop-shadow-lg lg:text-center">
                Unlock your products potential
                </h2>
            </div>

            <div className="lg:sticky" style={{top:"17rem",marginBottom:"12rem",marginTop:0}}>
                <div className="hidden lg:block absolute -top-16 h-32 w-full bg-gradient-to-t from-white via-white/80 dark:from-[#0E1117] dark:via-[#0E1117]">

                </div>
                <div className="relative overflow-hidden w-full h-full p-px rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-b from-slate-200 to-slate-100 dark:from-[#393C45] dark:to-[#1A1D24]">
                    <div className="absolute w-1/2 h-32 -right-8 dark:right-auto dark:-left-8 -top-16 bg-indigo-500 dark:bg-white blur-3xl opacity-25">

                    </div>
                    <div className="relative w-full rounded-[23px] lg:rounded-[39px] bg-[#F9FAFB] dark:bg-[#101318] h-full grid grid-cols-1 lg:grid-cols-2">
                        <div className="px-6 py-8 lg:p-16 lg:pr-0">
                            <div className="flex flex-col lg:flex-row items-start gap-x-4 gap-y-2 mb-1">
                                <div className="mb-1 flex items-center space-x-4 font-mono uppercase text-indigo-500 dark:text-indigo-400 sm:mb-3">
                                    <span>001</span>
                                    <span  className="text-black/20 dark:text-white/20"> { "///"} </span>
                                </div>
                                <h3 className="text-black dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm -mt-0.5 mb-3">
                                Subscribe & Request
                                </h3>
                            </div>
                            <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base max-w-md">
                                <span>
                                Subscribe in just a minute and get access to your own request board with instructions on how to get the most out of your subscription. When you&apos;re ready for a top-tier website, 
                                <b>add as many requests as you like</b>  – we&apos;ll tackle them one by one.
                                </span>
                            </p>
                        </div>
                        <div className="hidden sm:block relative overflow-hidden">
                            <div className="absolute h-2/3 left-0 bottom-0 -right-64">
                            <Image src={bgGrid} alt="" className="object-cover object-left-top opacity-50" width="1920" height="1080"
                            style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,color:"transparent"}}>

                                </Image>
                                <div style={{borderRadius:"50% 50%"}} className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-indigo-400 w-3/4 h-32 blur-3xl opacity-30">

                                </div>
                            </div>
                            <div className="relative m-16">
                                <div className="origin-top-left" style={{transform: "scale(1.02322) translateZ(0px)"}}>
                                <Image src={requestBg} alt="" className="object-cover object-left-top opacity-50" width="1920" height="1080"
                            style={{color:"transparent"}}>

                                </Image>
                                </div>
                                <div className="absolute inset-0 origin-top-left" style={{transform: "translateX(22.6716%) translateY(19.6194px) scale(1.04705) translateZ(0px)"}}>
                                <Image src={requestCard} alt="" className="object-cover object-left-top opacity-50" width="1920" height="1080"
                            style={{color:"transparent"}}>

                                </Image>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:sticky" style={{top:"17rem",marginBottom:"12rem",marginTop:0}}>
                <div className="hidden lg:block absolute -top-16 h-32 w-full bg-gradient-to-t from-white via-white/80 dark:from-[#0E1117] dark:via-[#0E1117]">

                </div>
                <div className="relative overflow-hidden w-full h-full p-px rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-b from-slate-200 to-slate-100 dark:from-[#393C45] dark:to-[#1A1D24]">
                    <div className="absolute w-1/2 h-32 -right-8 dark:right-auto dark:-left-8 -top-16 bg-indigo-500 dark:bg-white blur-3xl opacity-25">

                    </div>
                    <div className="relative w-full rounded-[23px] lg:rounded-[39px] bg-[#F9FAFB] dark:bg-[#101318] h-full grid grid-cols-1 lg:grid-cols-2">
                        <div className="px-6 py-8 lg:p-16 lg:pr-0">
                            <div className="flex flex-col lg:flex-row items-start gap-x-4 gap-y-2 mb-1">
                                <div className="mb-1 flex items-center space-x-4 font-mono uppercase text-indigo-500 dark:text-indigo-400 sm:mb-3">
                                    <span>002</span>
                                    <span  className="text-black/20 dark:text-white/20">{ "///"} </span>
                                </div>
                                <h3 className="text-black dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm -mt-0.5 mb-3">
                                Subscribe & Request
                                </h3>
                            </div>
                            <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base max-w-md">
                                <span>
                                Subscribe in just a minute and get access to your own request board with instructions on how to get the most out of your subscription. When you&apos;re ready for a top-tier website, 
                                <b>add as many requests as you like</b>  – we&apos;ll tackle them one by one.
                                </span>
                            </p>
                        </div>
                        <div className="hidden sm:block relative overflow-hidden">
                            <div className="absolute h-2/3 left-0 bottom-0 -right-64">
                            <Image src={bgGrid} alt="" className="object-cover object-left-top opacity-50" width="1920" height="1080"
                            style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,color:"transparent"}}>

                                </Image>
                                <div style={{borderRadius:"50% 50%"}} className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-indigo-400 w-3/4 h-32 blur-3xl opacity-30">

                                </div>
                            </div>
                            <div className="relative m-16">
                                <div className="origin-top-left" style={{transform: "scale(1.02322) translateZ(0px)"}}>
                                <Image src={requestBg} alt="" className="object-cover object-left-top opacity-50" width="1920" height="1080"
                            style={{color:"transparent"}}>

                                </Image>
                                </div>
                                <div className="absolute inset-0 origin-top-left" style={{transform: "translateX(22.6716%) translateY(19.6194px) scale(1.04705) translateZ(0px)"}}>
                                <Image src={requestCard} alt="" className="object-cover object-left-top opacity-50" width="1920" height="1080"
                            style={{color:"transparent"}}>

                                </Image>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="lg:sticky" style={{top:"17rem",marginBottom:"12rem",marginTop:0}}>
                <div className="hidden lg:block absolute -top-16 h-32 w-full bg-gradient-to-t from-white via-white/80 dark:from-[#0E1117] dark:via-[#0E1117]">

                </div>
                <div className="relative overflow-hidden w-full h-full p-px rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-b from-slate-200 to-slate-100 dark:from-[#393C45] dark:to-[#1A1D24]">
                    <div className="absolute w-1/2 h-32 -right-8 dark:right-auto dark:-left-8 -top-16 bg-indigo-500 dark:bg-white blur-3xl opacity-25">

                    </div>
                    <div className="relative w-full rounded-[23px] lg:rounded-[39px] bg-[#F9FAFB] dark:bg-[#101318] h-full grid grid-cols-1 lg:grid-cols-2">
                        <div className="px-6 py-8 lg:p-16 lg:pr-0">
                            <div className="flex flex-col lg:flex-row items-start gap-x-4 gap-y-2 mb-1">
                                <div className="mb-1 flex items-center space-x-4 font-mono uppercase text-indigo-500 dark:text-indigo-400 sm:mb-3">
                                    <span>003</span>
                                    <span  className="text-black/20 dark:text-white/20">{ "///"} </span>
                                </div>
                                <h3 className="text-black dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm -mt-0.5 mb-3">
                                Subscribe & Request
                                </h3>
                            </div>
                            <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base max-w-md">
                                <span>
                                Subscribe in just a minute and get access to your own request board with instructions on how to get the most out of your subscription. When you&apos;re ready for a top-tier website, 
                                <b>add as many requests as you like</b>  – we&apos;ll tackle them one by one.
                                </span>
                            </p>
                        </div>
                        <div className="hidden sm:block relative overflow-hidden">
                            <div className="absolute h-2/3 left-0 bottom-0 -right-64">
                            <Image src={bgGrid} alt="" className="object-cover object-left-top opacity-50" width="1920" height="1080"
                            style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,color:"transparent"}}>

                                </Image>
                                <div style={{borderRadius:"50% 50%"}} className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-indigo-400 w-3/4 h-32 blur-3xl opacity-30">

                                </div>
                            </div>
                            <div className="relative m-16">
                                <div className="origin-top-left" style={{transform: "scale(1.02322) translateZ(0px)"}}>
                                <Image src={requestBg} alt="" className="object-cover object-left-top opacity-50" width="1920" height="1080"
                            style={{color:"transparent"}}>

                                </Image>
                                </div>
                                <div className="absolute inset-0 origin-top-left" style={{transform: "translateX(22.6716%) translateY(19.6194px) scale(1.04705) translateZ(0px)"}}>
                                <Image src={requestCard} alt="" className="object-cover object-left-top opacity-50" width="1920" height="1080"
                            style={{color:"transparent"}}>

                                </Image>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="relative mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:px-12  pt-24 lg:pt-48 pb-16 lg:pb-24">
            <h2 className="text-black dark:text-white font-display font-extrabold leading-tight text-2xl lg:text-3xl dark:drop-shadow-md undefined">
                <span>
                Cutting-edge design, <br /> crafted for your product
                </span>
            </h2>
            <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base mt-7 mb-12 lg:mb-16 max-w-xl">
                <span>
                We value great design because we know it will not only attract more potential users. It can also bring you lots of attention for your product on social media. <br />
                We have optimized our design process to work with Figma, so you can view previews and prototypes easily.
                </span>
            </p>

            <div className="grid grid-cols-1 gap-12 lg:gap-x-16 md:grid-cols-2 lg:grid-cols-3">
            <div  className="shadow-xl p-4 rounded-xl flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
                    <div className="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
                        <div className="relative group w-14 h-14">
                            <div className="absolute inset-x-5 h-2 bottom-0 bg-rose-400 blur-md opacity-50"></div>
                            <div className="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
                                <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-md dark:opacity-80"></div>
                                <div className="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
                                    <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-lg dark:opacity-80"></div>
                                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3309 0.5C32.7053 0.5 32.0937 0.685189 31.5731 1.03223L23.1081 6.67555C20.781 8.22699 18.681 10.0782 16.8587 12.1743C20.3833 13.775 23.2249 16.6166 24.8256 20.1413C26.9217 18.319 28.7729 16.219 30.3244 13.8918L35.9677 5.42681C36.3147 4.90625 36.4999 4.29462 36.4999 3.66898C36.4999 1.9188 35.0811 0.5 33.3309 0.5ZM19.4991 23.8748C20.7967 23.154 22.0372 22.3438 23.2127 21.4519C21.7926 17.981 19.019 15.2073 15.548 13.7872C14.6561 14.9627 13.8459 16.2033 13.1251 17.5008L12.6609 18.3364C15.555 19.1642 17.8358 21.4449 18.6636 24.339L19.4991 23.8748ZM10.2499 20.5C6.79811 20.5 3.99992 23.2982 3.99992 26.75C3.99992 28.1307 2.88064 29.25 1.49992 29.25C1.44332 29.25 1.38698 29.2481 1.331 29.2444C0.870745 29.214 0.431136 29.4395 0.187363 29.8311C-0.0564093 30.2226 -0.0647234 30.7167 0.165734 31.1162C1.6754 33.7336 4.50561 35.5 7.74992 35.5C12.5824 35.5 16.4999 31.5825 16.4999 26.75C16.4999 23.2982 13.7017 20.5 10.2499 20.5Z" fill="#9EFF00"/>
                                    </svg>
                                </div>
                            </div>
                            
                        </div>
                        <h3 className="text-black dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm undefined">
                           <span>
                           Struggling to keep<br />your site up-to-date?
                           </span>
                           
                        </h3>
                    </div>
                    <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base max-w-md">
                    When your product evolves, it can be hard to keep your website up-to-date whilst maintaining highest design standards.
                    </p>
                </div>
                <div  className="shadow-xl p-4 rounded-xl flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
                    <div className="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
                        <div className="relative group w-14 h-14">
                            <div className="absolute inset-x-5 h-2 bottom-0 bg-rose-400 blur-md opacity-50"></div>
                            <div className="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
                                <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-md dark:opacity-80"></div>
                                <div className="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
                                    <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-lg dark:opacity-80"></div>
                                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3309 0.5C32.7053 0.5 32.0937 0.685189 31.5731 1.03223L23.1081 6.67555C20.781 8.22699 18.681 10.0782 16.8587 12.1743C20.3833 13.775 23.2249 16.6166 24.8256 20.1413C26.9217 18.319 28.7729 16.219 30.3244 13.8918L35.9677 5.42681C36.3147 4.90625 36.4999 4.29462 36.4999 3.66898C36.4999 1.9188 35.0811 0.5 33.3309 0.5ZM19.4991 23.8748C20.7967 23.154 22.0372 22.3438 23.2127 21.4519C21.7926 17.981 19.019 15.2073 15.548 13.7872C14.6561 14.9627 13.8459 16.2033 13.1251 17.5008L12.6609 18.3364C15.555 19.1642 17.8358 21.4449 18.6636 24.339L19.4991 23.8748ZM10.2499 20.5C6.79811 20.5 3.99992 23.2982 3.99992 26.75C3.99992 28.1307 2.88064 29.25 1.49992 29.25C1.44332 29.25 1.38698 29.2481 1.331 29.2444C0.870745 29.214 0.431136 29.4395 0.187363 29.8311C-0.0564093 30.2226 -0.0647234 30.7167 0.165734 31.1162C1.6754 33.7336 4.50561 35.5 7.74992 35.5C12.5824 35.5 16.4999 31.5825 16.4999 26.75C16.4999 23.2982 13.7017 20.5 10.2499 20.5Z" fill="#9EFF00"/>
                                    </svg>
                                </div>
                            </div>
                            
                        </div>
                        <h3 className="text-black dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm undefined">
                           <span>
                           Struggling to keep<br />your site up-to-date?
                           </span>
                           
                        </h3>
                    </div>
                    <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base max-w-md">
                    When your product evolves, it can be hard to keep your website up-to-date whilst maintaining highest design standards.
                    </p>
                </div>
                <div  className="shadow-xl p-4 rounded-xl flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]">
                    <div className="mb-4 flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row">
                        <div className="relative group w-14 h-14">
                            <div className="absolute inset-x-5 h-2 bottom-0 bg-rose-400 blur-md opacity-50"></div>
                            <div className="relative overflow-hidden h-14 w-14 rounded-2xl p-px bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
                                <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-md dark:opacity-80"></div>
                                <div className="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
                                    <div className="absolute inset-x-4 h-4 -bottom-2 bg-rose-400 blur-lg dark:opacity-80"></div>
                                    <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3309 0.5C32.7053 0.5 32.0937 0.685189 31.5731 1.03223L23.1081 6.67555C20.781 8.22699 18.681 10.0782 16.8587 12.1743C20.3833 13.775 23.2249 16.6166 24.8256 20.1413C26.9217 18.319 28.7729 16.219 30.3244 13.8918L35.9677 5.42681C36.3147 4.90625 36.4999 4.29462 36.4999 3.66898C36.4999 1.9188 35.0811 0.5 33.3309 0.5ZM19.4991 23.8748C20.7967 23.154 22.0372 22.3438 23.2127 21.4519C21.7926 17.981 19.019 15.2073 15.548 13.7872C14.6561 14.9627 13.8459 16.2033 13.1251 17.5008L12.6609 18.3364C15.555 19.1642 17.8358 21.4449 18.6636 24.339L19.4991 23.8748ZM10.2499 20.5C6.79811 20.5 3.99992 23.2982 3.99992 26.75C3.99992 28.1307 2.88064 29.25 1.49992 29.25C1.44332 29.25 1.38698 29.2481 1.331 29.2444C0.870745 29.214 0.431136 29.4395 0.187363 29.8311C-0.0564093 30.2226 -0.0647234 30.7167 0.165734 31.1162C1.6754 33.7336 4.50561 35.5 7.74992 35.5C12.5824 35.5 16.4999 31.5825 16.4999 26.75C16.4999 23.2982 13.7017 20.5 10.2499 20.5Z" fill="#9EFF00"/>
                                    </svg>
                                </div>
                            </div>
                            
                        </div>
                        <h3 className="text-black dark:text-white font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm undefined">
                           <span>
                           Struggling to keep<br />your site up-to-date?
                           </span>
                           
                        </h3>
                    </div>
                    <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base max-w-md">
                    When your product evolves, it can be hard to keep your website up-to-date whilst maintaining highest design standards.
                    </p>
                </div>
            </div>
        </section>



        <div className="relative border-t border-slate-200 dark:border-slate-700">
            <div className="absolute inset-x-0 top-0 h-96 overflow-hidden">
                <div  style={{borderRadius:"50% 50%"}} className="mx-auto -mt-48 h-96 w-full max-w-screen-xl bg-[#F9FAFB] blur-3xl dark:bg-[#15191F] sm:blur-4xl">

                </div>
            </div>
        </div>


        <section className="relative mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:px-12  pt-16 lg:pt-24">
            <h2 className="text-black dark:text-white font-display font-extrabold leading-tight text-2xl lg:text-3xl dark:drop-shadow-md undefined">
                <span>No Webflow, no Framer,
                    <br />but real Next.js development
                </span>
            </h2>
            <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base mt-7 mb-12 lg:mb-16 max-w-xl">
            Yep. Low code website builders might be great for getting a landing page up quickly. But we believe that 
            <b>in the long run, nothing beats a modern frontend stack</b>
            . It allows full control over design and animations, as well as providing a solid base to fully integrate services like payments, content, search, booking and many more.
            </p>

            <div className="col-span-2 flex flex-col items-center sm:flex-row flex-wrap justify-between sm:-ml-3 gap-x-16 gap-y-8">
                <div className="relative" style={{scale:"0.8"}}>
                    <Image src={brand1} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                    className="h-8 w-auto dark:hidden"
                    style={{color:"transparent"}}
                    
                    >
                    </Image>
                    <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                    className="h-8 w-auto hidden dark:block"
                    style={{color:"transparent"}}
                    
                    >
                    </Image>
                </div>
                <div className="relative">
                    <Image src={brand1} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                    className="h-8 w-auto dark:hidden"
                    style={{color:"transparent"}}
                    
                    >
                    </Image>
                    <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                    className="h-8 w-auto hidden dark:block"
                    style={{color:"transparent"}}
                    
                    >
                    </Image>
                </div>
                <div className="relative">
                    <Image src={brand1} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                    className="h-8 w-auto dark:hidden"
                    style={{color:"transparent"}}
                    
                    >
                    </Image>
                    <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                    className="h-8 w-auto hidden dark:block"
                    style={{color:"transparent"}}
                    
                    >
                    </Image>
                </div>
                <div className="relative" style={{scale:"0.9"}}>
                    <Image src={brand1} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                    className="h-8 w-auto dark:hidden"
                    style={{color:"transparent"}}
                    
                    >
                    </Image>
                    <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                    className="h-8 w-auto hidden dark:block"
                    style={{color:"transparent"}}
                    
                    >
                    </Image>
                </div>
                <div className="relative">
                    <Image src={brand1} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                    className="h-8 w-auto dark:hidden"
                    style={{color:"transparent"}}
                    
                    >
                    </Image>
                    <Image src={brandWhite} alt="brand image"  loading="lazy" decoding="async" data-nimg="fill"
                    className="h-8 w-auto hidden dark:block"
                    style={{color:"transparent"}}
                    
                    >
                    </Image>
                </div>
            </div>
        </section>


        <section className="relative mx-auto w-full max-w-screen-xl px-6 sm:px-8 lg:px-12  relative group pt-24 lg:pt-48 grid grid-cols-1 gap-y-16 md:grid-cols-3 items-end">
            <div className="absolute bottom-0 h-96 inset-x-0">
                <div  style={{borderRadius:"50% 50%"}}  className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-indigo-400 w-1/2 h-32 blur-3xl sm:blur-4xl transition-opacity duration-500 opacity-70 group-hover:opacity-90">

                </div>
                <Image src={bgGrid} alt="" className="h-full w-auto mx-auto opacity-50 pointer-events-none" width="1920" height="1080"
                                style={{color:"transparent"}}>

                </Image>
            </div>
            <div className="hidden md:block">
                <Image src={clearystLight} alt="" className="dark:hidden relative w-full" width="1200" height="748"
                                style={{color:"transparent"}}>

                </Image>
                <Image src={clearystDark} alt="" className="hidden dark:block relative w-full" width="1200" height="748"
                                style={{color:"transparent"}}>

                </Image>
            </div>
            <div className="relative flex flex-col items-start md:items-center justify-end md:pb-16 lg:pb-24">
                <h2 className="text-black dark:text-white font-display font-extrabold leading-tight text-3xl sm:text-4xl lg:text-5xl dark:drop-shadow-lg md:text-center">
                    <span>
                    Recent <br /> work
                    </span>
                </h2>
                <p className="paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-base mt-7 mb-8 max-w-xs md:text-center">
                This is some of our latest design and/or development work.
                </p>
                <motion.div
                        onHoverStart={() => setHovered1(true)}
                        onHoverEnd={() => setHovered1(false)}
                    >
                        <Button variant="default" className="rounded-full ">
                            <span>See more</span>
                        </Button>
                    </motion.div>
            </div>
            <div>
                <Image src={effectLight} alt="" className="dark:hidden relative w-full" width="1200" height="748"
                                style={{color:"transparent"}}>

                </Image>
                <Image src={effectDark} alt="" className="hidden dark:block relative w-full" width="1200" height="748"
                                style={{color:"transparent"}}>

                </Image>
            </div>
        </section>


        <div className="relative border-t border-slate-200 dark:border-slate-700">
            <div className="absolute inset-x-0 top-0 h-96 overflow-hidden">
                <div  style={{borderRadius:"50% 50%"}} className="mx-auto -mt-48 h-96 w-full max-w-screen-xl bg-[#F9FAFB] blur-3xl dark:bg-[#15191F] sm:blur-4xl">

                </div>
            </div>
        </div>
    </div>
  );
};
