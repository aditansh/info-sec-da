"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
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
import { ArrowLeft, EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import axios, { isAxiosError } from "axios";
import { type APIResponse, type User } from "@/types";

const LoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export default function Page() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [role, setRole] = useState<string>();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    try {
      setIsSubmit(true);
      const { data } = await axios.post<APIResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        values,
      );
      const user = data.data as User;
      setRole(user.role);
    } catch (err) {
      if (isAxiosError(err)) {
        if (err.response?.status === 400) {
          setRole("invalid");
        }
      }
    }
  }

  function onReset() {
    setIsSubmit(false);
    setIsShowPassword(false);
    setRole(undefined);
    form.reset();
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
          Login Form
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto mt-8 flex flex-col gap-4 md:w-1/3"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Username"
                    disabled={isSubmit}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      {...field}
                      type={isShowPassword ? "text" : "password"}
                      placeholder="Password"
                      disabled={isSubmit}
                      className="pr-10"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      type="button"
                      onClick={() => setIsShowPassword(!isShowPassword)}
                      className="absolute right-0 top-1/2 w-10 -translate-y-1/2 transform"
                    >
                      {isShowPassword ? <EyeOffIcon /> : <EyeIcon />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <Button
        className="mx-auto mt-4 flex flex-col md:w-1/3"
        onClick={() => onReset()}
      >
        Reset
      </Button>

      {isSubmit && (
        <div className="mt-4 rounded-lg bg-zinc-500/50 p-4">
          <p>
            <b>Username: </b>
            {form.getValues("username")}
          </p>
          <p>
            <b>Password: </b>
            {form.getValues("password")}
          </p>
          <p>
            <b>Query: </b>
            <code>
              SELECT * FROM users WHERE username = &apos;
              {form.getValues("username")}
              &apos; AND password = &apos;{form.getValues("password")}&apos;;
            </code>
          </p>
        </div>
      )}

      {role && (
        <div className="mt-4 rounded-lg bg-zinc-500/50 p-4">
          {role === "invalid" ? (
            <p className="text-red-500">Invalid username or password</p>
          ) : (
            <>
              <p>
                <b>Role: </b>
                {role}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
