import Link from "next/link";
import { ResetForm } from "./ResetForm";

export default function SignUp() {
  return (
    <main className="flex justify-center items-center h-full min-h-screen bg-background text-foreground font-[family-name:var(--font-inter)] relative py-12 px-5">
      <Link
        href={"/"}
        className="absolute top-9 left-5 md:left-[50px] text-xl md:text-[30px] font-bold"
      >
        AI Chatbot
      </Link>
      <div className="flex flex-col w-full max-w-[400px] gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[40px] text-center">Reset Password</h1>
          <p className="text-lg text-center">
            Enter a new password to change your password
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <ResetForm />
        </div>
      </div>
    </main>
  );
}
