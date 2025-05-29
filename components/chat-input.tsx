"use client";
import { MicIcon, SendIcon } from "@/assets/svg";
import { UploadIcon } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export function ChatInput({
  value,
  setValue,
  setVoice,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  setVoice?: Dispatch<SetStateAction<boolean>>;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const maxRows = 5;
  const lineHeight = 28;

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";

      const scrollHeight = textareaRef.current.scrollHeight;
      const maxHeight = maxRows * lineHeight;

      if (scrollHeight > maxHeight) {
        textareaRef.current.style.height = `${maxHeight}px`;
        textareaRef.current.style.overflowY = "scroll";
      } else {
        textareaRef.current.style.height = `${scrollHeight}px`;
        textareaRef.current.style.overflowY = "hidden";
      }
    }
  }, [value, maxRows, lineHeight]);

  return (
    <div className="flex items-center gap-4 min-h-[93px] w-full max-w-[720px] mx-auto mt-auto mb-[92px]">
      <div className="bg-[#1F3315] min-h-[70px] w-full shadow-ask-input rounded-lg flex items-center px-3 gap-3">
        <button className="h-8 w-8 aspect-square rounded-lg flex items-center justify-center bg-[#404450] hover:opacity-80 active:opacity-100">
          <UploadIcon size={17} />
        </button>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          //   className="flex w-full border-none outline-none h-7 resize-none"
          className={`
            flex w-full border-none outline-none resize-none
            overflow-y-hidden
            min-h-[28px] 
            leading-[${lineHeight}px]`}
          placeholder="Ask questions"
          rows={1}
        />
        <button className="h-8 w-8 rounded-lg flex items-center justify-center bg-transparent border border-white hover:opacity-80 active:bg-[#404450]/80">
          <SendIcon />
        </button>
      </div>
      <button
        onClick={() => setVoice && setVoice(true)}
        className="h-14 w-14 apsect-square rounded-lg flex justify-center items-center bg-[#091901] border border-white hover:opacity-80 active:scale-90"
      >
        <MicIcon />
      </button>
    </div>
  );
}
