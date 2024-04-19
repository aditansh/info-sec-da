"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, SearchIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios, { isAxiosError } from "axios";
import { type APIResponse, type Movie } from "@/types";
import { DataTable } from "@/components/data-table/data-table";
import { columns } from "@/components/data-table/columns";

const SearchSchema = z.object({
  value: z.string(),
});

export default function Page() {
  const [data, setData] = useState<Movie[]>();

  const form = useForm<z.infer<typeof SearchSchema>>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      value: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SearchSchema>) {
    try {
      const { data } = await axios.post<APIResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/search`,
        values,
      );
      setData(data.data as Movie[]);
    } catch (err) {
      if (isAxiosError(err)) {
        if (err.response?.status === 400) {
          setData([]);
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
          Movie Search
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto mt-8 flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="value"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter a movie name"
                      className="pr-12"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 w-10 -translate-y-1/2 transform"
                    >
                      <SearchIcon />
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      {data && <DataTable data={data} columns={columns} />}
    </div>
  );
}
