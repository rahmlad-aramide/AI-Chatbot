"use client";
import Image from "next/image";
import botImage from "@/assets/images/flashcard-bot.png";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <main
      className={cn(
        "py-10 md:pt-[84px] md:pb-[213px] h-full font-(family-name:--font-lato)",
      )}
    >
      <div className="flex flex-col justify-center items-center gap-10 md:gap-[143px] h-full">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[50px]">Flashcards</h1>
          <p className="text-xl font-medium">Start learning with Flashcards</p>
        </div>
        <div className="w-full max-w-[446px] mx-auto flex flex-col items-center">
          <Image
            src={botImage}
            width={474}
            height={460}
            alt="Flashcard Bot"
            className="w-[237px] h-auto"
          />
          <p className="font-medium p-[30px] bg-[#040D00] text-center">
            Hi! I’m AI chatbot! I’ll help you personalize your experience , so
            you can get started on your learning journey asap
          </p>
        </div>
      </div>
    </main>
  );
}
