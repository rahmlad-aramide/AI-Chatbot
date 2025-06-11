'use client'

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";
import { CheckmarkIcon } from "@/assets/svg";

export const PricingPlans = () => {
  const [activePlan, setActivePlan] = useState('Monthly')
  const plans = [
    {
      plan: "Basic Plan",
      price: 0,
      values: [
        "Basic AI voice & text chat",
        "Limited flashcard learning (10 flashcards/month)",
        "Community chat access (read-only)",
        "Conversation history (last 3 sessions)",
        "3 concurrent fast jobs",
      ],
      buttonText: "Free Plan",
    },
    {
      plan: "Pro Plan (Most Popular)",
      price: 9,
      values: [
        "Unlimited AI voice & text chat",
        "Full flashcard learning access",
        "Interactive Q&A with AI",
        "Conversation recording & playback",
        "Community chat",
        "Priority AI response & improved memory",
      ],
      buttonText: "Upgrade to Pro Plan",
    },
    {
      plan: "Business Plan (Advanced)",
      price: 19,
      values: [
        "Everything in Pro Plan",
        "AI training for personalized learning",
        "Team & admin dashboard",
        "API access for integrations",
        "Advanced analytics & usage insights",
      ],
      buttonText: "Upgrade to Business Plan",
    },
    {
      plan: "Custom Enterprise Plan",
      price: 39,
      values: [
        "AI customization & dedicated support",
        "On-premise deployment options",
        "Scalable AI integrations",
      ],
      buttonText: "Upgrade to Custom Plan",
    },
  ];
  return (
    <section
      id="pricing"
      className="flex flex-col gap-11 md:gap-[110px] py-[31px] w-full max-w-[1240px] mx-auto px-3.5 md:px-10 font-(family-name:--font-inter)"
    >
      <div className="flex flex-col items-center gap-[51px]">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl md:text-[40px] font-bold">Upgrade your plan</h3>
          <p className="text-[#52575D] text-sm md:text-2xl">
            Choose the plan that works for you.
          </p>
        </div>
        <div className="flex h-[47px] w-full max-w-[316px] mx-auto rounded-[100px] gap-2 p-1 bg-white transition-all duration-200">
          <button onClick={()=>setActivePlan("Monthly")} className={cn("bg-transparent w-full h-full rounded-[100px] text-black", activePlan === 'Monthly' && 'font-bold bg-primary')}>
            Monthly
          </button>
          <button onClick={()=>setActivePlan("Yearly")} className={cn("bg-transparent w-full h-full rounded-[100px] text-black", activePlan === 'Yearly' && 'font-bold bg-primary')}>
            Yearly <span className={cn("text-primary text-xs", activePlan === 'Yearly' && 'text-white font-normal')}>-20% off</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="group flex flex-col bg-[#0D0C0C] border border-transparent hover:border-primary rounded-[30px] py-8 px-6 min-h-[550px] transition duration-200"
          >
            <h6 className="font-semibold">{plan.plan}</h6>
            <div className="flex items-center gap-2 mt-4 mb-8">
              <div className="font-extrabold text-4xl">${plan.price}</div>
              <div className="flex flex-col">
                <div className="text-[#868C92] text-xs">per editor/month</div>
                <div className="text-[#868C92] text-xs">billed monthly</div>
              </div>
            </div>
            <div className="gap space-y-4">
              {plan.values.map((v, idx) => (
                <div key={idx} className="flex gap-2">
                  <div className="text-[#575757] group-hover:text-primary transition duration-200 mt-0.5"><CheckmarkIcon /></div>
                  <div className="text-[#D2D7D9] font-light text-sm">{v}</div>
                </div>
              ))}
            </div>
            <div className="mt-auto">
              <Button size={'sm'} className="w-full bg-[#F1EFFF33] group-hover:bg-primary">
                {plan.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
