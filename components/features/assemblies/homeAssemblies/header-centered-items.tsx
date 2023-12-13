
'use client';

import { Button } from "@/components/ui/button";
import { motion, useCycle } from 'framer-motion';
import Image from "next/image";
import { useState } from "react";
import brand1 from "@/public/contentlayer-black.svg"

export const HeaderCenteredItems = async () => {
    const [isHovered, setHovered] = useState(false)
    const [isHovered1, setHovered1] = useState(false)

  return (
    <div className="w-full">
        <div className="w-full pt-[200px] pb-[60px] backdrop-blur-lg backdrop-saturate-150 bg-background/70 flex justify-center">
            <div className="w-full flex flex-col justify-center max-w-[800px] gap-[25px]">
                <h1 className="text-center text-black dark:text-white font-display font-extrabold leading-tight text-3xl sm:text-4xl lg:text-5xl dark:drop-shadow-lg">Your Next-Level SaaS Website is only one click away</h1>
                <p className="text-center paragraph leading-relaxed text-slate-600 dark:text-slate-300 text-lg mt-8 lg:mt-12">
                    <span>The first ever</span> {" "}
                    <b>design and development subscription</b>{" "}
                    <span>for SaaS companies. Get</span>{" "}
                    <b>highly detailed designs and modern frontend development</b>{" "}
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
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            >

                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            >

                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            >

                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            >

                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            >

                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            >

                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            >

                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            >

                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            >

                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            >

                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            >

                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            >

                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            >

                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            >

                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            >

                            </Image>
                        </div>
                        <div className="shrink-0 relative h-8 w-64">
                            <Image src={brand1} alt="brand image" 
                            className="object-center object-contain dark:hidden"
                            style={{position:'absolute', height:"100%", width:"100%", left:0, top:0, right:0, bottom:0, color:"transparent"}}
                            // style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
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
    </div>
  );
};
