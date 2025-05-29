"use client";
import Image from "next/image";
import summarizeImage from "@/assets/images/summarize-article.png";
import { ChatInput } from "@/components/chat-input";
import { useState } from "react";

export default function SummarizeArticle() {
  const [value, setValue] = useState("");
  const suggestions = [
    "What are the key points of this article?",
    "Summarize this article in a few sentences",
    "Summarize this article as if explaining it to a 10-year-old.",
    "Summarize this article for a LinkedIn post",
  ];

  return (
    <main className="pt-[63px] px-5 md:px-[60px] font-(family-name:--font-lato) h-full min-h-[891px] bg-[#040D00]">
      <div className="flex flex-col gap-10 md:gap-[89px] h-full">
        <div className="flex flex-col md:flex-row gap-[26px]">
          <div>
            <Image
              src={summarizeImage}
              width={80}
              height={80}
              alt="Summarize image"
              className="h-10 w-auto pt-1"
            />
          </div>
          <div className="font-bold">
            <h1 className="text-[30px]">Summarize Article</h1>
            <p>
              Get started with AI chatbox and chat with the AI.Not sure where to
              start?
            </p>
          </div>
        </div>
        {value ? null : (
          <div className="flex flex-wrap gap-[23px] items-center justify-center">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setValue(suggestion)}
                className="bg-[#545454] text-white rounded-[10px] px-[13px] py-[18px] w-[200px] min-h-20 md:min-h-[186px] flex text-left"
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
