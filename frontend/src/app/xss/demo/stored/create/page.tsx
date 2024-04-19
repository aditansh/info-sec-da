"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import axios, { isAxiosError } from "axios";
import { type APIResponse } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

const PostSchema = z.object({
  name: z.string(),
  desc: z.string(),
});

export default function Page() {
  const router = useRouter();
  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      name: "",
      desc: "",
    },
  });

  async function onSubmit(values: z.infer<typeof PostSchema>) {
    try {
      await axios.post<APIResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs`,
        {
          title: values.name,
          content: values.desc,
        },
      );
      router.push("./");
    } catch (err) {
      if (isAxiosError(err)) {
        if (err.response?.status === 400) {
          // setRole("invalid");
        }
      }
    }
  }

  return (
    <div className="h-screen px-[5%] pt-[10vh]">
      <div className="relative">
        <Link href="./">
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-1/2 -translate-y-1/2"
          >
            <ArrowLeft />
          </Button>
        </Link>
        <p className="grow text-center text-2xl font-semibold md:text-4xl">
          Create Blog Post
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto mt-8 flex flex-col gap-4 md:w-1/3"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} type="text" placeholder="Title" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Description" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Save</Button>
        </form>
      </Form>
    </div>
  );
}
