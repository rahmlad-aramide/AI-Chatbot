"use client";
import { PlusIconWhite } from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";
import summarize from "@/assets/images/summarize-article.png";
import create from "@/assets/images/create-resume.png";
import generateIdea from "@/assets/images/generate-idea.png";
import writeCode from "@/assets/images/write-code.png";
import recordImage from "@/assets/images/record-image.png";
import { ChatInput } from "@/components/chat-input";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Page() {
  const [value, setValue] = useState("");
  const [voice, setVoice] = useState(false);
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
        voice ? "min-h-full" : "min-h-[891px]",
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
    </main>
  );
}
