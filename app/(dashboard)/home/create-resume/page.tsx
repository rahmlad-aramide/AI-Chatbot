"use client";
import Image from "next/image";
import resumeImage from "@/assets/images/create-resume.png";
import { ChatInput } from "@/components/chat-input";
import { useState } from "react";

export default function CreateResume() {
  const [value, setValue] = useState("");
  const suggestions = [
    "Create a resume for a marketing manager with 5 years of experience.",
    "Write a cover letter for a software engineer position.",
    "Help me tailor my resume for a data science role.",
    "What are some strong action verbs for a project management resume?",
  ];

  return (
    <main className="pt-[63px] px-5 md:px-[60px] font-(family-name:--font-lato) h-screen min-h-[891px] bg-[#040D00]">
      <div className="flex flex-col gap-[89px] h-full">
        <div className="flex gap-[26px]">
          <div>
            <Image
              src={resumeImage}
              width={80}
              height={80}
              alt="Resume image"
              className="h-10 w-auto pt-1"
            />
          </div>
          <div className="font-bold">
            <h1 className="text-[30px]">Create Resume</h1>
            <p>
              Get started with AI chatbox and chat with the AI.Not sure where to
              start?
            </p>
          </div>
        </div>
        {value ? null : (
          <div className="flex flex-wrap gap-[23px]">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setValue(suggestion)}
                className="bg-[#545454] text-white rounded-[10px] px-[13px] py-[18px] w-[200px] min-h-[186px] flex text-left"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
        <ChatInput value={value} setValue={setValue} />
      </div>
    </main>
  );
}
