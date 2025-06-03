import Link from "next/link";
import { SubscriptionForm } from "./subscription-form";

export const Footer = () => {
  //     Features
  // Support
  // Socials
  // Voice AI
  // How It Works
  // Twitter
  // Chatbot
  // Contact us
  // Facebook
  // Flashcards
  // Privacy Policy
  // Instagram
  // Community
  // Terms of Service
  // Tiktok
  const featuresLinks = [
    {
      heading: "Features",
      links: [
        {
          label: "Voice AI",
          href: "/#",
        },
        {
          label: "Chatbot",
          href: "/#",
        },
        {
          label: "Flashcards",
          href: "/#",
        },
        {
          label: "Community",
          href: "/#",
        },
      ],
    },
  ];
  const supportLinks = [
    {
      heading: "Support",
      links: [
        {
          label: "How It Works",
          href: "/#",
        },
        {
          label: "Contact us",
          href: "/contact",
        },
        {
          label: "Privacy Policy",
          href: "/privacy-policy",
        },
        {
          label: "Terms of Service",
          href: "/terms-of-service",
        },
      ],
    },
  ];
  const socialLinks = [
    {
      heading: "Socials",
      links: [
        {
          label: "Twitter",
          href: "https://x.com",
        },
        {
          label: "Facebook",
          href: "https://facebook.com",
        },
        {
          label: "Instagram",
          href: "https://instagram.com",
        },
        {
          label: "Tiktok",
          href: "https://www.tiktok.com/en/",
        },
      ],
    },
  ];
  return (
    <footer className="flex flex-col gap-10 md:gap-[159px] pt-4 md:pt-16 pb-11 container mx-auto px-4 md:px-10">
      <div className="flex flex-col gap-10 md:gap-[94px]">
        <div className="flex flex-col">
          <Link href={"/"} className="text-[32px] font-semibold">
            AI Chatbot
          </Link>
          <p className="text-sm font-medium">
            Talk, Learn, and Engage with AI-Powered Conversations.
          </p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 md:gap-20">
          <div className="flex flex-wrap xs:flex-nowrap justify-between gap-4 gap-y-10 xs:gap-6 md:gap-10 lg:gap-20 xl:gap-40 2xl:gap-56">
            {featuresLinks.map((link, idx) => (
              <div key={idx} className="flex flex-col gap-5">
                <h6 className="font-bold text-sm">{link.heading}</h6>
                <ul className="flex flex-col gap-5">
                  {link.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {supportLinks.map((link, idx) => (
              <div key={idx} className="flex flex-col gap-5">
                <h6 className="font-bold text-sm">{link.heading}</h6>
                <ul className="flex flex-col gap-5">
                  {link.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {socialLinks.map((link, idx) => (
              <div key={idx} className="flex flex-col gap-5">
                <h6 className="font-bold text-sm">{link.heading}</h6>
                <ul className="flex flex-col gap-5">
                  {link.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <SubscriptionForm />
        </div>
      </div>
      <div className="text-center">
        Copyright: &copy;2023 AI Chatbot. All Rights Reserved.
      </div>
    </footer>
  );
};
