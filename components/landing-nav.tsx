"use client"; // This is important for using useState

import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinks = [
    {
      label: "Features",
      href: "/#features",
    },
    {
      label: "How It Works",
      href: "/#how-it-works",
    },
    {
      label: "Pricing",
      href: "/#pricing",
    },
    {
      label: "FAQ",
      href: "/#faq",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="flex justify-between h-14 sticky top-0 bg-[#010101] z-50 md:h-20 items-center w-full max-w-[1249px] mx-auto font-(family-name:--font-poppins)">
      <div className="flex flex-row-reverse items-center gap-2 xs:gap-4">
        <Link href="/" className="text-xl xs:text-2xl md:text-3xl">
          AI Chatbot
        </Link>
        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                <MenuIcon className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[350px] px-5 bg-[#010101] border-r border-white/20"
            >
              <SheetHeader className="px-0">
                <SheetTitle asChild>
                  <Link href="/" className="text-2xl w-fit">
                    AI Chatbot
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-4">
                {navLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="text-lg font-semibold py-2 hover:text-primary transition-colors"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={"#"}
                  className="text-lg font-semibold py-2 hover:text-primary transition-colors"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Watch Demo
                </Link>
                <Button asChild className="w-full mt-4">
                  <Link href="/signup" onClick={() => setIsSheetOpen(false)}>
                    Get started for free
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop navigation links (hidden below md) */}
      <div className="hidden md:flex items-center gap-5">
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className="text-sm font-semibold underline underline-offset-2 decoration-transparent hover:decoration-primary"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex gap-4 md:gap-7 items-center">
        <Link
          href={"#"}
          className="hidden lg:flex text-sm font-semibold underline underline-offset-2 decoration-transparent hover:decoration-primary"
        >
          Watch Demo
        </Link>
        <Button asChild size={"sm"} className="hidden md:inline-block">
          <Link href="/signup">Get started for free</Link>
        </Button>
        <Button asChild size={"sm"} className="h-8 md:hidden px-5 xs:px-10">
          <Link href="/signup">Join</Link>
        </Button>
      </div>
    </nav>
  );
};
