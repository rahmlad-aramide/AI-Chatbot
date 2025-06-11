import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { LandingLayout } from "@/components/landing-layout";
import { PricingPlans } from "@/components/pricing-plans";

export default function Home() {
  return (
    <LandingLayout>
      <main className="flex flex-col w-full max-w-[1249px] mx-auto pt-[129px]">
        <Hero />
        <Features />
        <PricingPlans />
        <Testimonials />
      </main>
    </LandingLayout>
  );
}
