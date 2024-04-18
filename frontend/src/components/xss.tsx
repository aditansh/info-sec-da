import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function XSS() {
  return (
    <div className="flex h-screen flex-col justify-center px-[5%]" id="xss">
      <p className="mb-4 text-5xl font-bold">Cross Site Scripting (XSS)</p>
      <p className="text-lg">
        SQL Injection is a code injection technique that might destroy your
        database. SQL Injection is one of the most common web hacking
        techniques. SQL Injection is the placement of malicious code in SQL
        statements, via web page input.
      </p>
      <br />
      <p className="text-lg">
        SQL Injection usually occurs when you ask a user for input, like their
        username/userid, and instead of a name/id, the user gives you an SQL
        statement that you will unknowingly run on your database.
      </p>
      <br />
      <div className="flex gap-4">
        <Button>
          <Link href="/sqli">Learn More</Link>
        </Button>
        <Button>
          <Link href="/sqli">Try Now</Link>
        </Button>
      </div>
    </div>
  );
}
