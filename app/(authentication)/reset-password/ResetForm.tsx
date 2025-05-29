"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import { PasswordInput } from "./PasswordInput";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const ResetForm = () => {
  const formSchema = z.object({
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirm_password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <PasswordInput placeholder="New password" label="New password" />
          <PasswordInput
            name="confirm_password"
            placeholder="Re-enter password"
            label="Re-enter password"
          />
          <Dialog>
            <DialogTrigger className="flex w-full">
              <Button type="button" className="w-full h-[54px]">
                Reset Password
              </Button>
            </DialogTrigger>
            <DialogContent hasClose={false}>
              <DialogHeader className="gap-5">
                <DialogTitle>Password has been changed</DialogTitle>
                <DialogDescription>
                  You have succesfully changed your password, you can now sign
                  in
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="flex items-end">
                <Button>
                  <Link href="/login">Back to Login</Link>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </form>
      </Form>
    </>
  );
};
