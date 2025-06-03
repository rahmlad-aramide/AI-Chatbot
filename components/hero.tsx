import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import hero from "@/assets/images/hero.png";
import heroMobile from "@/assets/images/hero-mobile.png";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center gap-14 md:gap-22">
      <div className="flex flex-col justify-center gap-6 w-full max-w-[965px] mx-auto">
        <h1 className="text-center text-xl md:text-[64px] font-bold">
          Talk, Learn, and Engage with{" "}
          <span className="text-primary">AI-Powered</span> Conversations
        </h1>
        <p className="text-center w-full max-w-[799px] mx-auto capitalize text-sm sm:text-base">
          Experience human-like voice interactions, learn through flashcards,
          and connect with a global community — all in one AI-driven platform.
        </p>
        <div className="flex flex-row justify-center gap-4 md:gap-20 max-w-[300px] md:max-w-full mx-auto">
          <Button variant={"outline"} className="px-4 xs:px-7 md:px-11 text-xs xs:text-base bg-[#010101]">
            Watch Demo
          </Button>
          <Button asChild className="px-4 xs:px-7 text-xs xs:text-base">
            <Link href="/signup">Get started for free</Link>
          </Button>
        </div>
      </div>
      <div className="px-5 md:px-10 w-full max-w-[1120px] mx-auto">
        <Image
          src={hero}
          alt="AI Chatbot dashboard"
          className="hidden md:flex"
        />
        <Image
          src={heroMobile}
          alt="AI Chatbot dashboard"
          className="flex md:hidden"
        />
      </div>
    </section>
  );
};
