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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  const formSchema = z.object({
    email: z
      .string()
      .min(5, {
        message: "Email must be at least 5 characters.",
      })
      .email(),
    firstname: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    phone: z.number().min(11, {
      message: "Phone number must be at least 1 characters.",
    }),
    message: z.string({ required_error: "What message do you have for us?" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstname: "",
      lastname: "",
      phone: +234,
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[50px]">
          <Box className="flex flex-col space-y-8">
            <Box className="flex gap-6">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Box>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input placeholder="Phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us how we can help you"
                      className="resize-none h-[166px] text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </Box>
          <Button type="submit" className="w-full h-[51px]">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
};
