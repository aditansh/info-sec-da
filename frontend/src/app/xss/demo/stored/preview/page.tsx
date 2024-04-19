"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();

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
          View Blog Post
        </p>
      </div>

      <div className="mt-4 rounded-lg bg-zinc-500/50 p-4">
        <h1
          id="name"
          className="text-2xl font-semibold"
          dangerouslySetInnerHTML={{ __html: searchParams.get("name") ?? "" }}
        />
        <p
          id="desc"
          className="mt-2"
          dangerouslySetInnerHTML={{ __html: searchParams.get("desc") ?? "" }}
        />
      </div>
    </div>
  );
}
