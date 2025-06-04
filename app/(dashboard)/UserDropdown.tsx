"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { HistoryIcon, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import user from "@/assets/images/user.png";
import { useState } from "react";
import { Box } from "@/components/ui/box";

export const UserDropdown = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2.5">
          <Image
            src={user}
            width={120}
            height={120}
            alt="Profile photo"
            className="h-14 md:h-[60px] w-auto"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="gap-2.5 p-2.5 w-[165px] -translate-x-6">
          <DropdownMenuItem
            asChild
            className="cursor-pointer h-[50px] font-semibold gap-2.5"
          >
            <button
              className="w-full"
              onClick={() => {
                // setIsSheetOpen(true);
              }}
            >
              <HistoryIcon size={24} color="#232323" /> History
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="cursor-pointer h-[50px] flex items-center font-semibold gap-2.5 text-[#E22D57] hover:!text-[#E22D57]"
          >
            <Link href={"/login"}>
              <LogOut size={24} color="#E22D57" />
              Logout
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-[243px] sm:w-[300px] pt-[94px] border-y border-white/20 bg-black">
          <SheetHeader className="px-0 mb-[94px]">
            <SheetTitle className="text-xl font-bold border-b border-white/20 pb-3 px-4">History</SheetTitle>
            <SheetDescription className="flex flex-col flex-1 h-screen pb-[98px]">
                <Box className="flex flex-col gap-8 px-2 h-screen overflow-y-auto">
                    <Box className="pt-4">
                        <Box className="font-bold text-white/80">Recent</Box>
                        <ul className="flex flex-col gap-4">
                            {Array.from({length: 10}).map((_, idx)=> (
                                <li key={idx}>
                                    <Link href={'/home/#'} className="text-sm font-medium">Generate a PRD for an ecomm...</Link>
                                </li>
                            ))}
                        </ul>
                    </Box>
                    <Box className="pt-4">
                        <Box className="font-bold text-white/80">7days ago</Box>
                        <ul className="flex flex-col gap-4">
                            {Array.from({length: 10}).map((_, idx)=> (
                                <li key={idx}>
                                    <Link href={'/home/#'} className="text-sm font-medium">Generate a PRD for an ecomm...</Link>
                                </li>
                            ))}
                        </ul>
                    </Box>
                    <Box className="pt-4">
                        <Box className="font-bold text-white/80">7days ago</Box>
                        <ul className="flex flex-col gap-4">
                            {Array.from({length: 10}).map((_, idx)=> (
                                <li key={idx}>
                                    <Link href={'/home/#'} className="text-sm font-medium">Generate a PRD for an ecomm...</Link>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Box>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};
