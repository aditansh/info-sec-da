"use client";

import React, { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 flex h-[10vh] w-screen items-center justify-between px-4 backdrop-blur-sm">
      <div>
        <h1 className="py-4 text-2xl font-bold">Information Security DA</h1>
      </div>
      <div className="hidden items-center gap-6 p-4 md:flex">
        <Link
          href="/#hero"
          className="transition-all duration-500 hover:scale-110"
        >
          Home
        </Link>
        <Link
          href="/#sqli"
          className="transition-all duration-500 hover:scale-110"
        >
          SQL Injection
        </Link>
        <Link
          href="/#xss"
          className="transition-all duration-500 hover:scale-110"
        >
          Cross-Site Scripting
        </Link>
        <Link
          href="/team"
          className="transition-all duration-500 hover:scale-110"
        >
          Team
        </Link>
        <ModeToggle />
      </div>
      <div className="flex items-center p-4 md:hidden">
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <MenuIcon size={24} onClick={() => setIsOpen(!isOpen)} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetDescription className="flex flex-col gap-6 pt-10 text-lg">
              <Link href="/#hero" className="border-b pb-2">
                Home
              </Link>
              <Link href="/#sqli" className="border-b pb-2">
                SQL Injection
              </Link>
              <Link href="/#xss" className="border-b pb-2">
                Cross-Site Scripting
              </Link>
              <Link href="/team" className="border-b pb-2">
                Team
              </Link>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
