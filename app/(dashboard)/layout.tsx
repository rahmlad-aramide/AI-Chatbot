import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import Image from "next/image";
import user from "@/assets/images/user.png";
import { ModelSelect } from "./ModelSelect";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-20 md:h-[120px] bg-black shrink-0 items-center gap-2">
          {/* <SidebarTrigger className="-ml-1" /> */}
          <div className="flex justify-between items-center w-full h-[60px] px-5 md:pl-4 md:pr-[38px]">
            <div className="flex gap-2 items-center">
              <SidebarTrigger className="-ml-1 md:hidden" />
              <ModelSelect />
            </div>
            <div>
              <Image
                src={user}
                width={120}
                height={120}
                alt="Profile photo"
                className="h-14 md:h-[60px] w-auto"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
