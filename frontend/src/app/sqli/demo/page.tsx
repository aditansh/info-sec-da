import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="flex h-screen flex-wrap items-center justify-center gap-4">
      <Link
        href="./demo/blind"
        className="flex h-40 w-40 items-center justify-center rounded-lg bg-zinc-500/30 p-4 text-lg font-medium"
      >
        Blind SQLI
      </Link>
      <Link
        href="./demo/union"
        className="flex h-40 w-40 cursor-pointer items-center justify-center rounded-lg bg-zinc-500/30 p-4 text-lg font-medium"
      >
        Union SQLI
      </Link>
    </div>
  );
}
