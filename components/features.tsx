import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import featured from "@/assets/images/featured.png";
import featuredMobile from "@/assets/images/featured-mobile.png";
import flashCards from "@/assets/images/flashcards.png";
import flashCardsMobile from "@/assets/images/flashcards-mobile.png";
import conversationIcons from "@/assets/images/conversation-icons.png";
import communtyImage from "@/assets/images/community.png";

export const Features = () => {
  return (
    <>
      <section
        id="features"
        className="flex flex-col font-(family-name:--font-inter) gap-8.5 md:gap-20 pt-6 md:pt-23 px-3.5 md:px-10 w-full max-w-[1240px] mx-auto"
      >
        <div className="flex flex-col gap-10 md:gap-14">
          <div className="flex flex-col gap-3">
            <h2 className="font-medium text-lg md:text-3xl font-(family-name:--font-poppins)">
              Engage, Learn, and Connect{" "}
              <span className="opacity-50">
                with AI-Powered Conversations – Experience the Future of Voice
                and Chat Interaction.
              </span>
            </h2>
            <Button asChild className="px-6 md:px-14 w-fit text-sm md:text-lg">
              <Link href="/signup">Start for free</Link>
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-8.5">
            <div className="w-full md:w-3/5">
              <Image
                src={featured}
                width={1396}
                height={822}
                alt="Chatbot Feature: Smart AI-Powered Conversations"
                className="hidden md:flex"
              />
              <Image
                src={featuredMobile}
                width={710}
                height={413}
                alt="Chatbot Feature: Smart AI-Powered Conversations"
                className="flex md:hidden"
              />
            </div>
            <div className="w-full md:w-2/5 pt-6.5 pl-2.5 pb-2.5 flex flex-col gap-8.5">
              <div className="flex-col gap-3">
                <h3 className="font-semibold text-sm md:text-xl">
                  Flashcard Learning System
                </h3>
                <p className="opacity-50 text-xs md:text-base">
                  Enhance your learning with AI-assisted flashcards. Read or
                  listen to study materials, ask questions, and receive
                  real-time explanations tailored to your progress
                </p>
              </div>
              <div className="pl-8 md:pl-12">
                <Image
                  src={flashCards}
                  width={916}
                  height={379}
                  alt="3 dlashcards stacked on top of each other"
                  className="hidden md:flex"
                />
                <Image
                  src={flashCardsMobile}
                  width={642}
                  height={262}
                  alt="3 dlashcards stacked on top of each other"
                  className="flex md:hidden"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8.5">
          <div className="flex flex-col w-full md:w-2/5 gap-2 pt-6.5 pl-5.5 pb-[54px] pr-[33px] border border-white/20">
            <h3 className="text-sm font-semibold">
              Conversation Recording & Playback
            </h3>
            <p className="opacity-80 text-xs max-w-[378px] w-4/5">
              Never lose an important discussion. Record, replay, and download
              past conversations for review anytime.
            </p>
            <Image
              src={conversationIcons}
              alt="2 Chat bubbles"
              className="flex self-end max-w-[148px]"
            />
          </div>
          <div className="flex flex-col w-full md:w-3/5 gap-2 pt-6.5 pl-5.5 pb-[54px] pr-[33px] border border-white/20">
            <h3 className="text-sm font-semibold">Community Chatrooms</h3>
            <p className="opacity-80 text-xs max-w-[378px] w-4/5 md:w-3/5">
              Join global and local discussions with other users and AI. Engage
              in real-time conversations, share knowledge, and collaborate with
              like-minded individuals.
            </p>
            <Image
              src={communtyImage}
              alt="Characters that are arranged along a circle path"
              className="flex self-end max-w-[148px]"
            />
          </div>
        </div>
      </section>
      <section
        id="how-it-works"
        className="py-[76px] md:py-[270px] px-3.5 md:px-10"
      >
        <h2 className=" font-(family-name:--font-inter) text-primary text-2xl md:text-[50px] font-semibold max-w-[20ch] md:max-w-[28ch] mx-auto text-center">
          AI Chatbot uses advanced reasoning capabilities, the chatbot reflects
          on context, learns from interactions, and delivers highly accurate,
          human-like responses in real time.
        </h2>
      </section>
    </>
  );
};
