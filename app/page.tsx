import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col font-(family-name:--font-poppins) px-5">
      <nav className="flex justify-between pt-4.5 md:pt-16 w-full max-w-[1249px] mx-auto">
        <Link href="/" className="text-2xl">
          AI Chatbot
        </Link>
        <Button asChild size={"sm"} className="hidden md:inline-block">
          <Link href="/signup">Get started for free</Link>
        </Button>
        <Button asChild size={"sm"} className="md:hidden px-10">
          <Link href="/signup">Join</Link>
        </Button>
      </nav>
      <main className="flex flex-col w-full max-w-[1249px] mx-auto pt-[129px]">
        <div className="flex flex-col justify-center gap-6 w-full max-w-[965px] mx-auto">
          <h1 className="text-center text-xl md:text-[64px] font-bold">
            Talk, Learn, and Engage with{" "}
            <span className="text-primary">AI-Powered</span> Conversations
          </h1>
          <p className="text-center w-full max-w-[799px] mx-auto capitalize text-sm sm:text-base">
            Experience human-like voice interactions, learn through flashcards,
            and connect with a global community — all in one AI-driven platform.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-20 max-w-[300px] md:max-w-full mx-auto">
            <Button variant={"outline"}>Watch Demo</Button>
            <Button asChild>
              <Link href="/signup">Get started for free</Link>
            </Button>
          </div>
        </div>
      </main>
      {/* <footer className="flex gap-[24px] flex-wrap items-center justify-center">
        <div>Copyright: &copy;2023 AI Chatbot. All Rights Reserved.</div>
      </footer> */}
    </div>
  );
}
