"use client";

import Hero from "@/components/hero";
import SQLI from "@/components/sqli";
import XSS from "@/components/xss";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";

export default function HomePage() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, isDirectionEnabled: true });

  return (
    <div ref={scrollRef}>
      <Hero />
      <SQLI />
      <XSS />
    </div>
  );
}
