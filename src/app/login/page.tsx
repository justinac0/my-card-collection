"use client";
import { FormEvent } from "react";
import Link from "next/link";

export default function LoginPage() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

  }

  return (
    <>
      <Link href={"/"}>back home</Link>
      <h1>Login/Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" inputMode="email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </>
  );
}