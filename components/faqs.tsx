import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export const FAQs = () => {
  const data = [
    {
      q: "What is the AI-Powered Chatbot?",
      a: "Our AI-powered chatbot is a voice- and text-enabled assistant designed to provide natural, human-like conversations. It helps users engage in real-time discussions, learn with AI-powered flashcards, and participate in community chatrooms while improving responses over time.",
    },
    {
      q: "How does the AI remember past conversations?",
      a: "Our AI-powered chatbot is a voice- and text-enabled assistant designed to provide natural, human-like conversations. It helps users engage in real-time discussions, learn with AI-powered flashcards, and participate in community chatrooms while improving responses over time.",
    },
    {
      q: "What can I use the Flashcard Learning System for?",
      a: "Our AI-powered chatbot is a voice- and text-enabled assistant designed to provide natural, human-like conversations. It helps users engage in real-time discussions, learn with AI-powered flashcards, and participate in community chatrooms while improving responses over time.",
    },
    {
      q: "Can I record and replay my conversations?",
      a: "Our AI-powered chatbot is a voice- and text-enabled assistant designed to provide natural, human-like conversations. It helps users engage in real-time discussions, learn with AI-powered flashcards, and participate in community chatrooms while improving responses over time.",
    },
    {
      q: "How does the AI learning and training system work?",
      a: "Our AI-powered chatbot is a voice- and text-enabled assistant designed to provide natural, human-like conversations. It helps users engage in real-time discussions, learn with AI-powered flashcards, and participate in community chatrooms while improving responses over time.",
    },
    {
      q: "What subscription plans are available?",
      a: "Our AI-powered chatbot is a voice- and text-enabled assistant designed to provide natural, human-like conversations. It helps users engage in real-time discussions, learn with AI-powered flashcards, and participate in community chatrooms while improving responses over time.",
    },
    {
      q: "Can businesses or developers customize the chatbot?",
      a: "Our AI-powered chatbot is a voice- and text-enabled assistant designed to provide natural, human-like conversations. It helps users engage in real-time discussions, learn with AI-powered flashcards, and participate in community chatrooms while improving responses over time.",
    },
    {
      q: "How do I get started?",
      a: "Our AI-powered chatbot is a voice- and text-enabled assistant designed to provide natural, human-like conversations. It helps users engage in real-time discussions, learn with AI-powered flashcards, and participate in community chatrooms while improving responses over time.",
    },
  ];
  return (
    <section id="faq" className="flex flex-col gap-4 md:gap-16 font-(family-name:--font-inter) py-6 md:py-24 container mx-auto">
      <div className="flex flex-col gap-1 md:gap-5 w-full px-4.5 max-w-[768px] md:px-10 mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-center">Frequently asked questions</h2>
        <p className="text-base md:text-xl text-[#667085] text-center">Everything you need to know about the product</p>
      </div>
      <div className="flex flex-col gap-2 w-full px-4.5 max-w-[768px] md:px-10 mx-auto">
        {data.map((item, idx) => (
          <Accordion type="single" collapsible key={idx}>
            <AccordionItem value={item.q}>
              <AccordionTrigger className={cn("text-sm md:text-lg font-medium", idx === 0 && 'border-t-0')}>{item.q}</AccordionTrigger>
              <AccordionContent className="text-xs md:text-base text-[#667085]">{item.a}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};
