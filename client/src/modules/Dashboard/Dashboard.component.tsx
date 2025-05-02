"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Dashboard() {
  const { data: session, status } = useSession();

  console.log(session, status);
  return (
    <>
      <h1>Hello Dashboard</h1>
      {status === "authenticated" ? (
        <Button variant="destructive" onClick={() => signOut()}>
          Logout
        </Button>
      ) : (
        <Link href="/login">
          <Button variant="default">Login</Button>
        </Link>
      )}
    </>
  );
}
