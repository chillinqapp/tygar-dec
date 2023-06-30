import React from 'react'
import Link from 'next/link'
import { twMerge } from "tailwind-merge"
import {clsx, ClassValue} from 'clsx'
import { cva } from 'class-variance-authority'
import { Button, Highlight } from "../button";
import { HeroSubtitle } from '../hero'
import { ChevronIcon } from "../icons/chevron";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Taxonomy",
  description:
    "An open source application built using the new router, server components and everything new in Next.js 13.",
  url: "https://tx.shadcn.com",
  ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/taxonomy",
  },
}

const Hero = () => {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
    <div className="container flex max-w-[120rem] flex-col items-center gap-4 text-center">
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0"
      href="/"
      variant="secondary"
      size="small"
    >
      <span>Follow along on twitter</span>{" "}
      <Highlight>→</Highlight>
    </Button>
      <h1 className="font-bold text-6xl sm:text-5xl md:text-7xl lg:text-7xl">
      Unlock your Web3 Potential: Innovate, Collaborate, Succeed!      </h1>
      <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      We are an innovation company driven by the spirit of Tigers in the Jungle.       <br className="hidden md:block" /> We specialize in providing a range of services that encompass consultations,<br className="hidden md:block" />strategizing, design, and development.
    </HeroSubtitle>
      <div className="space-x-4">
        
        <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="/"
      variant="primary"
      size="large"
    >
      <span>Get Started </span>
      <Highlight>
        <ChevronIcon />
      </Highlight>
    </Button>
        {/* <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="/"
      variant="secondary"
      size="large"
    >
      <span>Github </span>
      <Highlight>
        <ChevronIcon />
      </Highlight>
      
    </Button> */}
       
      </div>
    </div>
  </section>
  )
}

export default Hero
