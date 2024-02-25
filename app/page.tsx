"use client";

import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconMessages } from "@tabler/icons-react";
import { cn } from "@/utils/cn";
import { Spotlight } from "../components/ui/Spotlight";
import { Tabs } from "../components/ui/tabs";
 

export default function Home() {
  const tabs = [
    {
      title: "Friends",
      value: "Ordinary",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-900/70 to-zinc-950/80">
          {/* <p className=" text-white"></p>
          <p className=" text-white">SA-B</p>
          <p className=" text-white">SA-B</p>
          <p className=" text-white">SA-B</p> */}

          <p className=" text-white">SA-B [maybe]</p>
          <p className=" text-white">SK-B</p>
          <p className=" text-white">SS-B [respectable, bff]</p>
        </div>
      ),
    },
    {
      title: "Ultra Friends",
      value: "Pro Max",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-900/70 to-zinc-950/80">
          <p className=" text-white">SG</p>
          <p className=" text-white">RR</p>
          <p className=" text-white">SK</p>
          <p className=" text-white">PP</p>
          <p className=" text-white">AG</p>
          <p className=" text-white">GK</p>

        </div>
      ),
    },
  /*  {
      title: "Messages",
      value: "Messages",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-900/70 to-zinc-950/80">
          <p>[Updated] <br/>Head on to <span className=" text-blue-600 underline"> <Link href={'/messages'}>{'/messages'}</Link></span></p>
        </div>
      ),
    }, */
    
  ];

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-8 w-8 text-neutral-500 dark:text-white" />,
    },
  /*  {
      name: "Messages",
      link: "/messages",
      icon: <IconMessages className="h-6 w-6 text-neutral-500 dark:text-white" />,

    },*/
    
  ];
 
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
 
  return (
    <main className="flex bg-black min-h-screen flex-col items-center justify-center py-24">
      <FloatingNav navItems={navItems} />
      {/* <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button variant={'link'}><h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
      SA-B?
    </h1></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="h-[70vh]">
          <DrawerHeader >
            <div className='h-auto w-full flex items-center justify-start'>
            <DrawerClose asChild>
              <Button variant="ghost"><h1 className=' text-blue-600'>Cancel</h1></Button>
            </DrawerClose>
            </div>
            <div className='flex flex-col items-center justify-center text-center h-full my-10'>
            <DrawerTitle>Still here</DrawerTitle>
            <DrawerDescription>How are you?</DrawerDescription>
            <br />
            <blockquote className="mt-6">{"Tbh, I fear talking to non-boys."}</blockquote>
            <blockquote className="mb-6">{"Also, I need your help."}</blockquote>
            <br />
            <DrawerTitle>{"I hope you understand"}</DrawerTitle>
            <DrawerDescription>{"Let's meet IRL"}</DrawerDescription>

            </div>
          </DrawerHeader>
          
          <DrawerFooter>
            
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer> */}
{/* <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div> */}
      
            {/* <div className="h-full w-full flex items-center justify-center text-center rounded-2xl">
              <Drawer shouldScaleBackground>
                <DrawerTrigger asChild>
                  <Button variant={'link'}>
                    <h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
                      {'Identified as "IRLS/*"'}
                    </h1>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className=" h-auto">
                    <DrawerHeader>
                      <div className="h-auto w-full flex items-center justify-start">
                        <DrawerClose asChild>
                          <Button variant={'ghost'}>
                            <h1 className=" text-blue-600">Okay</h1>
                          </Button>
                        </DrawerClose>
                      </div>
                      <div className="flex flex-col justify-center text-center h-full py-10 pt-16">
           <DrawerTitle>All the best, friends.</DrawerTitle>
           
                      </div>
                    </DrawerHeader>

                    <DrawerFooter></DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div> */}

{/* <div className="h-[50rem] w-full dark:bg-black  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div> */}
    <div className="flex justify-center">
          <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div></div>
    </main>
  );
}
