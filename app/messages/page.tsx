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
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


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
    <main className="">
      {'"andhar tera aak andha hua h kya be"'} <br/>
      {'"tera baap ka website hai h kya be *giggles of that ... *"'} <br/>
      {'"tera website bohot bada ambani ka website h bhi nhi joh baar baar jaake dekhe"'} <br/>
      {'"teri koi bhautarni hogi usko bolo nahi aane"'}
    </main>
  );
}
