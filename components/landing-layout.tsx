import { ReactNode } from "react";
import { Navbar } from "./landing-nav";
import { Footer } from "./footer";
import { FAQs } from "./faqs";

export const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col font-(family-name:--font-poppins) px-5 bg-[#010101]">
      <Navbar />
      {children}
      <FAQs />
      <Footer />
    </div>
  );
};
