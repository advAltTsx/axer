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
import { GoogleGeminiEffect } from "../.././components/ui/google-gemini-effect";
import { FloatingNav } from "../.././components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";


export default function Home() {
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
<div
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
    </div>
      
             <div className="h-full w-full flex items-center justify-center text-center rounded-2xl">
              <Drawer shouldScaleBackground>
                <DrawerTrigger asChild>
                  <Button variant={'link'}>
                    <h1 className="scroll-m-30 text-white underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
                      {'Listen'}
                    </h1>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="bg-black border-0">
                  <div className=" h-auto">
                    <DrawerHeader>
                      <div className="h-auto w-full flex items-center justify-start">
                        <DrawerClose asChild>
                            <h1 className=" text-blue-600 cursor-pointer p-6">Okay</h1>
                        </DrawerClose>
                      </div>
                      <div className="flex flex-col justify-center text-center h-full py-10 pt-16">
           <DrawerTitle><span className=" text-white">All the best, friend.</span></DrawerTitle>
           
                      </div>
                    </DrawerHeader>

                    <DrawerFooter></DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div> 
          
    </main>
  );
}
