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
        
      {'"Stalkers falsely guessing I\'m talking about SS-B[DAV] currently, not even close, they\'re far more respectable than you, they\'ve even contributed for resizeable screens in v69.6.1 through GitHub, truly an advanced person (not like you, lmfao), why not minding your own business instead?"'}
   <br/>
      {'"SS-B[DAV] is my friendliest sister. I would do whatever I want, scream, talk, or text anyone. Who the hell are you to even think of making me scream at them? Be in your limits. It\s a dare to speak something bad about them infront of me ever again."'} <br/>
     <span className="text-red-600"><s> {'{"tera website bohot bada koi ambani ka website hai bhi nahi joh baar baar dekhne aaye - apni aukaat mein raho tere paas itna bhi nhi h", "tere baap ka website hai kya be *giggles* - tumlog se jyada ganda insaan se aaj takk kabhi mulakat nahi hua", "1 saal se harr ek email dekhe ho aur puchte aur email address kaha se mila - besharam ho ekdm?", "jhuth bolne mein mbbs karke rakhe hai - agar pata rhta toh jab Scarlet ke saath ladai karrha tha tabhi tereko sorry bolne bhi nahi aata, terese jyada accha toh mera dushman log hai, mere dushman bhi mereko dekhke mere samne gaali dena baand krdete hai", "bahiniya, bhutarni - tere jaise ko *aap* bola uske baare mein zindagi bhar sochunga, tumlog jhutho baat karne bhi layak nahi ho, insaaniyat toh durr ka baat hai", "remembering these sentences'} {"- I hate even your voice now"} '}</s></span>
    <br/>
      <span className="text-blue-500 bold"> You as well as I, we both know I would never in my life say you like this even mistakenly or in intense anger, just never 🥲
        <br/>
        All I told him was to write something such worse that {"you'd never come here again yourself"} <br/>
      </span>
        I made you call your brother to say him that <u>{"you're talented in Typescript/Javascript and we could be a great team that's why I'm looking for you or build up some stories and we'd have been in a team with granted permissions :("} </u>, but I also got angry when you gave the phone to some other kid and I knew beforehands {"there's gonna be a fight"} because of him. Also, keep damn control on your mouth I never expected this from *you* 🥲
   
    </main>
  );
}
