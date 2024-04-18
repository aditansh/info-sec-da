import React from "react";

export default function Hero() {
  return (
    <div className="flex h-screen flex-col justify-center px-[5%]" id="hero">
      <p className="mb-4 text-5xl font-bold">Welcome to InfoSec DA</p>
      <p className="text-xl">
        A simple web application to demonstrate some common web vulnerabilities.
      </p>
    </div>
  );
}
