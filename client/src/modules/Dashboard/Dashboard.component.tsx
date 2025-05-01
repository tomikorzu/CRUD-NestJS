"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  console.log(session, status);
  return (
    <>
      <h1>Hello Dashboard</h1>
      <Button variant="destructive" onClick={() => signOut()}>Logout</Button>
    </>
  );
}
