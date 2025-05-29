import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "@/assets/svg";
import { LoginForm } from "./LoginForm";

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
          <h1 className="font-bold text-[40px]">Welcome Back</h1>
          <p className="text-lg">Sign in to access your AI Chatbot account</p>
        </div>
        <div className="flex flex-col gap-5">
          <LoginForm />
          <div className="flex items-center gap-2.5">
            <div className="flex-1 bg-[#D9D9D9] h-px" />
            <div>or</div>
            <div className="flex-1 bg-[#D9D9D9] h-px" />
          </div>
          <div>
            <Button className="w-full" variant="white">
              Continue with Google <GoogleIcon />
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-[#6C6C6C]">
            Already have an account?{" "}
            <Link
              href={"/login"}
              className="text-primary underline underline-offset-4"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
