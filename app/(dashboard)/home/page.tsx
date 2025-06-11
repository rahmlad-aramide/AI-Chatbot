"use client";
import { PlusIconWhite } from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";
import summarize from "@/assets/images/summarize-article.png";
import create from "@/assets/images/create-resume.png";
import generateIdea from "@/assets/images/generate-idea.png";
import writeCode from "@/assets/images/write-code.png";
import recordImage from "@/assets/images/record-image.png";
import userAvatar from "@/assets/images/user-avatar.png";
import { ChatInput } from "@/components/chat-input";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { UserChat } from "@/components/user-chat";
import { SystemChat } from "@/components/system-chat";

export default function Page() {
  const [value, setValue] = useState("");
  const [voice, setVoice] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chats, setChats] = useState(false);
  const [deleteConvo, setDeleteConvo] = useState(!false);

  const links = [
    {
      image: summarize,
      label: "Summarize Article",
      url: "/home/summarize-article",
    },
    {
      image: create,
      label: "Create Resume",
      url: "/home/create-resume",
    },
    {
      image: generateIdea,
      label: "Generate Idea",
      url: "/home/generate-idea",
    },
    {
      image: writeCode,
      label: "Write Code",
      url: "/home/write-code",
    },
  ];

  return (
    <main
      className={cn(
        "pt-[70px] px-5 h-screen bg-[#040D00]",
        voice ? "min-h-full" : "min-h-[891px]"
      )}
    >
      {voice ? (
        <div className="flex flex-col justify-center items-center gap-16 h-[calc(100%_-_70px)]">
          <h1>Hi Abdrahman</h1>
          <button>
            <Image
              src={recordImage}
              width={474}
              height={460}
              alt="Start recording"
              className="w-[180px] md:w-[237px] h-auto"
            />
          </button>
          <p className="font-bold text-2xl md:text-[30px]">Tap to chat</p>
        </div>
      ) : chats ? (
        <div className="flex flex-col gap-5.5">
          <UserChat
            date="24 Sep"
            image={userAvatar}
            message="How do you define usability testing in UX design?"
            time="11:30 PM"
          />
          <SystemChat
            date="24 Sep"
            message="Sure! Here are three different versions of 404 error messages for an ecommerce clothing website:

            Uh-oh! It looks like the page you're looking for isn't here. Please check the URL and try again or return to the homepage to continue shopping.

            2. Whoops! We can't seem to find the page you're looking for. Please double-check the URL or use our search bar 
                to find what you need. You can also browse our collection of stylish clothes and accessories.

            3. Sorry, the page you're trying to access isn't available. It's possible that the item has sold out or the page has 
                been removed. Please click back to return to the previous page or head over to our homepage to explore more."
            time="11:30 PM"
          />
        </div>
      ) : (
        <div className="flex flex-col gap-10 h-full">
          <div className="flex flex-col items-center">
            <h1 className="text-[30px] font-bold text-center lg:text-left">
              What can I help you with?
            </h1>
            <p className="font-bold text-center lg:text-left">
              Get started with AI chatbox and chat with the AI. Not sure where
              to start?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-[13px] gap-y-[33px] w-full max-w-[649px] mx-auto">
            {links.map((link, idx) => (
              <Link
                href={link.url}
                key={idx}
                className="border border-white flex items-center gap-[25px] p-4 rounded-[10px]"
              >
                <span>
                  <Image
                    src={link.image}
                    width={38}
                    height={38}
                    alt={`${link.label}'s Icon`}
                  />
                </span>
                {link.label}
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white ml-auto">
                  <PlusIconWhite />
                </span>
              </Link>
            ))}
          </div>
          <ChatInput value={value} setValue={setValue} setVoice={setVoice} />
        </div>
      )}
      <Dialog onOpenChange={setDeleteConvo} open={deleteConvo}>
        <DialogContent
          hasClose={false}
          className="bg-[#424242] border-0 rounded-[10px]"
        >
          <DialogHeader className="gap-5 text-white">
            <DialogTitle>
              Are you sure you want to delete this conversation?
            </DialogTitle>
            <DialogDescription className="text-white">
              This action cannot be undone
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-[29px] sm:justify-start">
            <Button
              onClick={() => setDeleteConvo(false)}
              variant="outline"
              className="bg-transparent sm:min-w-[172px]"
            >
              Cancel
            </Button>
            <Button
              onClick={() => setDeleteConvo(false)}
              variant="destructive"
              className=" sm:min-w-[172px]"
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
