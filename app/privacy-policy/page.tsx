import { LandingLayout } from "@/components/landing-layout";

export default function Page() {
  return (
    <LandingLayout>
      <main className="flex flex-col gap-[55px] pt-[109px]">
        <div className="container mx-auto px-4 md:px-10">
          <div className="bg-primary px-4 h-fit min-h-[210px] flex flex-col gap-4 items-center justify-center text-black/80">
            <h1 className="text-3xl md:text-[64px] text-black font-medium leading-tight">
              Privacy Policy
            </h1>
            <p className="text-base md:text-xl">Effective date: May 23, 2025</p>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-10 md:py-8">
          <h2 className="text-xl font-bold mb-7 md:mb-14">
            Privacy Policy for AIChatbot
          </h2>

          <div className="mb-8 md:mb-20">
            <h3 className="text-xl font-semibold mb-3">
              1. Information We Collect
            </h3>
            <p className="text-base mb-2">
              We collect the following types of information when you use our
              website:
            </p>
            <h3 className="text-lg font-medium mb-2">
              a. Personal Information
            </h3>
            <p className="text-base mb-2">
              When you sign up or contact us, we may collect:
            </p>
            <ul className="list-disc text-base ml-6 mb-2">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Company Name (optional)</li>
              <li>
                Payment Information (processed securely via Stripe or PayPal)
              </li>
            </ul>
            <h3 className="text-lg font-medium mb-2">b. Usage Data</h3>
            <p className="text-base mb-2">
              We automatically collect non-personal information about how you
              use our site, such as:
            </p>
            <ul className="list-disc text-base ml-6 mb-2">
              <li>IP Address</li>
              <li>Browser Type</li>
              <li>Device Information</li>
              <li>Pages Visited</li>
              <li>Time Spent on Pages</li>
            </ul>
            <h3 className="text-lg font-medium mb-2">
              c. Cookies & Tracking Technologies
            </h3>
            <p className="text-base">
              We use cookies and similar tools to enhance your experience. You
              can control cookie preferences in your browser settings.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-base mb-2">
              We use the information we collect to:
            </p>
            <ul className="list-disc ml-4 text-base mb-2">
              <li>Provide and manage access to our services</li>
              <li>Respond to your inquiries and support requests</li>
              <li>
                Send service-related updates and newsletters (only if you opt
                in)
              </li>
              <li>Analyze usage trends to improve our platform</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">
              3. How We Share Your Information
            </h2>
            <p className="text-base mb-2">
              We do not sell your personal information. We may share limited
              data with trusted third parties for:
            </p>
            <ul className="list-disc ml-4 text-base">
              <li>Payment processing (e.g., Stripe, PayPal)</li>
              <li>Cloud storage and hosting</li>
              <li>Analytics and marketing tools (e.g., Google Analytics)</li>
            </ul>
            <p className="text-base mt-2">
              All third-party service providers are obligated to protect your
              data.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
            <p className="text-base mb-2">
              We use industry-standard security measures to protect your
              information, including:
            </p>
            <ul className="list-disc ml-4 text-base">
              <li>SSL encryption</li>
              <li>End-to-end encryption for chat data</li>
              <li>Access controls and authentication</li>
            </ul>
            <p className="text-base mt-2">
              Despite our best efforts, no system is 100% secure, so we
              encourage you to use strong passwords and protect your login
              details.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
            <p className="text-base mb-2">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc ml-4 text-base">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Object to data processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="text-base mt-2">
              To exercise these rights, email us at{" "}
              <a href="mailto:info@aichatbox.com">info@aichatbox.com</a>.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">6. Data Retention</h2>
            <p className="text-base">
              We retain your personal data only as long as necessary to provide
              services and fulfill legal obligations. You may request deletion
              of your data at any time.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">
              7. Children’s Privacy
            </h2>
            <p className="text-base">
              Our service is not intended for users under 13. We do not
              knowingly collect data from children.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">
              8. International Users
            </h2>
            <p className="text-base">
              We comply with GDPR for users in the EU and CCPA for users in
              California. If you’re accessing our platform from outside your
              country of residence, you consent to transferring your data to our
              servers based in
              <span className="font-semibold">
                East United States
              </span>
              .
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">
              9. Updates to This Policy
            </h2>
            <p className="text-base">
              We may update this Privacy Policy occasionally. Any changes will
              be posted here with a new effective date.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
            <p className="text-base">
              If you have any questions or concerns, please contact us at:
            </p>
            <p className="text-base mt-2">
              📧 Email:{" "}
              <a href="mailto:info@aichatbot.com">info@aichatbot.com</a>
            </p>
            <p className="text-base">🏢 Address: AI Chatbot HQ</p>
          </div>
        </div>
      </main>
    </LandingLayout>
  );
}
