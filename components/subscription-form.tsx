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
import { Box } from "./ui/box";

export const SubscriptionForm = () => {
  const formSchema = z.object({
    email: z
      .string()
      .min(5, {
        message: "Email must be at least 5 characters.",
      })
      .email(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-4">
                <FormLabel>Stay up to date</FormLabel>
                <Box className="flex flex-col xs:flex-row gap-4">
                  <Box className="flex flex-col gap-2">
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className="h-14"
                      />
                    </FormControl>
                    <FormMessage className="flex xs:hidden" />
                  </Box>
                  <Button
                    type="submit"
                    className="w-full xs:w-fit px-4.5 h-14 self-end"
                  >
                    Subscribe
                  </Button>
                </Box>
                <FormMessage className="hidden xs:flex" />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
};
