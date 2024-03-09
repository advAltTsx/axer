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
      {'{"https://advwastaken.vercel.app (community version) has been abandoned since 20:01, 03/08/24"}'}
   <br/>
      {'{"reason: Humiliation | Betrayal | Dual Nature of closest IRL friend"}'}
      <br/>
      {'{"extreme hates: liars}'} 
    <br/>
      {'{"tera website bohot bada koi ambani ka website hai bhi nahi joh baar baar dekhne aaye - apni aukaat mein raho tere paas itna bhi nhi h", "tere baap ka website hai kya be *giggles* - tumlog se jyada ganda insaan se aaj takk kabhi mulakat nahi hua", "1 saal se harr ek email dekhe ho aur puchte aur email address kaha se mila - besharam ho ekdm?", "jhuth bolne mein mbbs karke rakhe hai - agar pata rhta toh jab Scarlet ke saath ladai karrha tha tabhi tereko sorry bolne bhi nahi aata, terese jyada accha toh mera dushman log hai, mere dushman bhi mereko dekhke mere samne gaali dena baand krdete hai", "bahiniya, bhutarni - tere jaise ko *aap* bola uske baare mein zindagi bhar sochunga, tumlog jhutho baat karne bhi layak nahi ho, insaaniyat toh durr ka baat hai", "remembering these sentences - I hate even your voice now"} '}
    </main>
  );
}
