"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { IUserRegisterResponse } from "@/types/requests";
import { userRegister } from "@/services/endpoints/users/auth";
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
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
});

export const SignupForm = () => {
  const router = useRouter();
    const { mutate, isPending } = useMutation({
        mutationFn: userRegister,
        onSuccess: (loginData: IUserRegisterResponse) => {
          console.log("loginData", loginData);
          toast.success("Registration Successful!", {
            description: "You are being redirected...",
          });
          form.reset();
          router.push("/login");
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
    mutate(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute -top-2.5 left-3 p-1 bg-white text-black">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute -top-2.5 left-3 p-1 bg-white text-black">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <Button disabled={isPending} type="submit" className="w-full h-[54px]">
            {isPending? "Signing up..." : "Sign up"}
          </Button>
        </form>
      </Form>
    </>
  );
};
