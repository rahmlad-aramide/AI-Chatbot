import { LandingLayout } from "@/components/landing-layout";
import Link from "next/link";
import { ContactForm } from "./ContactForm";

export default function Contact() {
  return (
    <LandingLayout>
      <main className="pt-22 pb-[102px] gap-6 w-full max-w-[1249px] mx-auto font-(family-name:--font-poppins) flex flex-col md:flex-row justify-center md:justify-between">
        <div className="flex flex-col gap-20 px-3.5 w-full md:w-1/2 xl:w-2/5 items-center md:items-left">
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="font-bold text-[64px]">Contact Us</h1>
              <p className="text-xl opacity-80">
                Email, call or complete the form to lear n how AI Chatbot can
                solve your messaging problem
              </p>
            </div>
            <ul className="flex flex-col gap-4 font-medium opacity-80">
              <li>
                <Link href={"mailto:info@aichatbot.io"}>info@aichatbot.io</Link>
              </li>
              <li>
                <Link href={"tel:321221234"}>321-221-234</Link>
              </li>
              <li>Customer support</li>
            </ul>
          </div>
          <div className="flex flex-col xs:flex-row md:flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-2 max-w-[233px]">
                <h3 className="text-xl font-bold">Customer Support</h3>
                <p className="opacity-80">Our support team is available around the clock to address  any concern or queries you may have</p>
            </div>
            <div className="flex flex-col gap-2 max-w-[233px]">
                <h3 className="text-xl font-bold">Feedback</h3>
                <p className="opacity-80">We value your feedback and we continously working to improve AI Chatbot.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 w-full md:w-1/2 xl:w-2/5 max-w-[500px] bg-[#0A0A0A] px-6 pt-10.5 pb-[51px] mx-auto md:ml-auto mt-10 md:mt-0">
            <div className="flex flex-col gap-4">
                <h2 className="font-bold text-xl">Get in Touch</h2>
                <p className="font-medium opacity-50">You can reach us anytime</p>
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
      </main>
    </LandingLayout>
  );
}
