import { LandingLayout } from "@/components/landing-layout";

export default function Page() {
  return (
    <LandingLayout>
      <main className="flex flex-col gap-[55px] pt-[109px]">
        <div className="container mx-auto px-4 md:px-10">
          <div className="bg-primary px-4 h-fit min-h-[210px] flex flex-col gap-4 items-center justify-center text-black/80">
            <h1 className="text-3xl md:text-[64px] text-black font-medium leading-tight">
              Terms of Use
            </h1>
            <p className="text-base md:text-xl">Effective date: May 23, 2025</p>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-10 md:py-8">
          <h2 className="text-xl font-bold mb-7 md:mb-14">
            Terms of Use for AIChatbot
          </h2>

          <div className="mb-8 md:mb-20">
            <h3 className="text-xl font-semibold mb-3">Introduction</h3>
            <p className="text-base">
              AI Chatbot is an AI-powered voice chatbot software-as-a-service
              (SaaS) platform that provides interactive, voice-enabled AI tools
              for learning, conversation, and productivity.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">
              2. Acceptance of Terms
            </h2>
            <p className="text-base">
              By accessing or using our platform, you confirm that you are at
              least 13 years old and have the legal capacity to enter into this
              agreement. If you&apos;re using our platform on behalf of an
              organization, you represent that you have the authority to bind
              that organization.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">3. Use of Service</h2>
            <p className="text-base mb-2">You agree to:</p>
            <ul className="list-disc ml-6 text-base">
              <li>Use the platform for lawful purposes only</li>
              <li>Not misuse or interfere with the service</li>
              <li>Not attempt to reverse engineer or harm the platform</li>
              <li>
                Not use the AI to generate or spread illegal, offensive, or
                harmful content
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">4. User Accounts</h2>
            <p className="text-base">
              To access certain features, you must create an account. You are
              responsible for maintaining the confidentiality of your login
              credentials and for all activities under your account.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">
              5. Subscriptions & Payments
            </h2>
            <p className="text-base mb-2">
              We offer various subscription plans (monthly/yearly) with
              access-based features. Payments are securely processed via Stripe,
              PayPal, or other listed gateways. All fees are non-refundable
              unless otherwise stated.
            </p>
            <p className="text-base font-medium mt-4">Free Trials:</p>
            <p className="text-base">
              We may offer free trials. If you do not cancel before the trial
              ends, your subscription will automatically convert to a paid plan.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">
              6. Intellectual Property
            </h2>
            <p className="text-base mb-2">
              All content on the platform—including AI models, software, voice
              recordings, flashcards, and UI—is the property of
              <span className="font-semibold">AI Chatbox</span> or its
              licensors.
            </p>
            <p className="text-base">
              You may not reproduce, distribute, or modify any content without
              our prior written consent.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">
              7. AI Content & Limitations
            </h2>
            <p className="text-base">
              While our AI is powerful, it may occasionally produce inaccurate
              or unexpected outputs. Use discretion when acting on AI-provided
              information. We do not guarantee that the service will always be
              error-free or uninterrupted.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">
              8. Conversation Recording
            </h2>
            <p className="text-base">
              Certain features allow for the recording and playback of
              conversations. By using these features, you consent to the
              recording of your voice interactions and acknowledge that these
              recordings will be stored securely in accordance with our Privacy
              Policy.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">9. Termination</h2>
            <p className="text-base mb-2">
              We reserve the right to suspend or terminate your access if you:
            </p>
            <ul className="list-disc ml-6 text-base">
              <li>Violate these Terms</li>
              <li>Engage in fraudulent or abusive behavior</li>
              <li>Breach subscription or payment terms</li>
            </ul>
            <p className="text-base mt-2">
              Upon termination, your access to services will be revoked, and
              your stored data may be deleted after a grace period.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">
              10. Community Chatrooms
            </h2>
            <p className="text-base">
              Users are responsible for their interactions in chatrooms.
              Harassment, hate speech, spam, and inappropriate behavior will not
              be tolerated. We reserve the right to remove content or users who
              violate community guidelines.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">
              11. Limitation of Liability
            </h2>
            <p className="text-base">
              To the fullest extent permitted by law,
              <span className="font-semibold">AI Chatbot</span> shall not be
              liable for any indirect, incidental, or consequential damages
              resulting from your use of the platform.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">12. Indemnity</h2>
            <p className="text-base">
              You agree to indemnify and hold
              <span className="font-semibold">AI Chatbot</span>, its affiliates,
              and team harmless from any claims or liabilities arising from your
              use of the service or violation of these Terms.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">13. Governing Law</h2>
            <p className="text-base">
              These Terms are governed by the laws of
              <span className="font-semibold">Nigerian Government</span>,
              without regard to conflict of law principles.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">14. Changes to Terms</h2>
            <p className="text-base">
              We may update these Terms from time to time. Any changes will be
              posted on this page with an updated effective date. Continued use
              of the service after changes means you accept the new Terms.
            </p>
          </div>

          <div className="mb-8 md:mb-20">
            <h2 className="text-xl font-semibold mb-3">15. Contact Us</h2>
            <p className="text-base">
              If you have questions about these Terms, feel free to contact us:
            </p>
            <p className="text-base mt-2">
              📧 Email:
              <a href="mailto:info@aichatbot.com">info@aichatbot.com</a>
            </p>
            <p className="text-base">🏢 Address: AI Chatbot HQ</p>
          </div>
        </div>
      </main>
    </LandingLayout>
  );
}
