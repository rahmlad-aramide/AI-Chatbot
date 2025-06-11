"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Cookies from "js-cookie";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "./PasswordInput";
import Link from "next/link";
import { Box } from "@/components/ui/box";
import { useMutation } from "@tanstack/react-query";
import { IUserLoginResponse } from "@/types/requests";
import { userLogin } from "@/services/endpoints/users/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string()
    .min(5, {
      message: "Email must be at least 5 characters.",
    })
    .email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export const LoginForm = () => {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
      mutationFn: userLogin,
      onSuccess: (loginData: IUserLoginResponse) => {
        console.log("loginData", loginData);
        toast.success("Login Successful!", {
          description: "You are being redirect...",
        });
        form.reset();
        Cookies.set("token", loginData.data.token);
        router.push("/home");
        // setAuthToken(loginData.data.token);
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (err: any) => {
        console.log("Login failed:", err);
        toast.error("Logging in failed!", {
          description: err?.response?.data?.message || err.message || "An error occurred. Try again later!",
        });
      },
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    mutate(values)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute -top-2.5 left-3 p-1 bg-white text-black">
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="Email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <PasswordInput />
          <Box className="flex">
            <Link
              href="/forgot-password"
              className="flex ml-auto text-primary hover:underline underline-offset-4"
            >
              Forgot Password
            </Link>
          </Box>
          <Button disabled={isPending} type="submit" className="w-full h-[54px]">
            {isPending? "Logging in...":"Login"}
          </Button>
        </form>
      </Form>
    </>
  );
};
