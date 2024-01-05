"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();

  return (
    <>
      <div>login page</div>
      <Link href="/auth/signup">Signup</Link>
      <button onClick={()=> router.push("/auth/signup")}>ss</button>
    </>
  );
}
