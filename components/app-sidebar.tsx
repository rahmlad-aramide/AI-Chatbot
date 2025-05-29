"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ArrowsIcon,
  CommunityIcon,
  LightningIcon,
  PlusIcon,
  PremiumIcon,
  SettingsIcon,
} from "@/assets/svg";
import { SearchForm } from "./ui/search-form";
import { Box } from "./ui/box";
import Link from "next/link";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "New Chat",
      url: "/home",
      icon: PlusIcon,
      isActive: true,
    },
    {
      title: "Flashcards",
      url: "/flashcards",
      icon: LightningIcon,
    },
    {
      title: "Community",
      url: "/community",
      icon: CommunityIcon,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Premium",
      url: "/premium",
      icon: PremiumIcon,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: SettingsIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="p-0" variant="inset" {...props}>
      <SidebarHeader className="gap-10 pt-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/" className="flex justify-between">
                <span className="truncate font-medium text-xl text-white">
                  AI Chatbot
                </span>
                <ArrowsIcon />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="pt-3">
        <NavMain items={data.navMain} />
        <Box className="h-px w-full bg-white opacity-20 my-1" />
        <NavMain items={data.navSecondary} />
      </SidebarContent>
    </Sidebar>
  );
}
