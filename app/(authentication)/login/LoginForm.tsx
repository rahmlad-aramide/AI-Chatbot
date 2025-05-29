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
import Link from "next/link";
import { Box } from "@/components/ui/box";

export const LoginForm = () => {
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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
          <Button asChild type="submit" className="w-full h-[54px]">
            <Link href="/home">Login</Link>
          </Button>
        </form>
      </Form>
    </>
  );
};
