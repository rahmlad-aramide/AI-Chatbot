"use client";

import { ChevronRight } from "lucide-react";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: () => React.JSX.Element;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathName = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              className="w-full h-[42px] bg-[#040D00]"
              data-active={pathName === item.url}
            >
              <a
                href={item.url}
                className="inline-flex items-center justify-between"
              >
                <span className="inline-flex items-center gap-2">
                  <item.icon />
                  <span>{item.title}</span>
                </span>
                {item.url === "/home" ? null : <ChevronRight />}
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
