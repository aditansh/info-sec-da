"use client";

import React, { useEffect, useState } from "react";
import { type APIResponse, type Blog } from "@/types";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";

export default function Page() {
  const [data, setData] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get<APIResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs`,
        );
        console.log(data.data);

        setData(data.data as Blog[]);
      } catch (err) {
        console.error(err);
      }
    }

    void fetchData();
  }, []);
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
          Blog Posts
        </p>
        <Link href="./stored/create">
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-0 top-1/2 -translate-y-1/2"
          >
            <Plus />
          </Button>
        </Link>
      </div>
      {data.map((blog) => (
        <a
          href={`./stored/preview?name=${blog.title}&desc=${blog.content}`}
          key={blog.title}
        >
          <div className="mt-4 rounded-lg bg-zinc-500/50 p-4">
            <h1 className="text-2xl font-semibold">{blog.title}</h1>
          </div>
        </a>
      ))}
    </div>
  );
}
