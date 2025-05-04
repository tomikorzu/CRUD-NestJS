"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { AuthStatus } from "../shared/utils/constants.utils";
import { Skeleton } from "@/components/ui/skeleton";

export default function Dashboard() {
  const { data: session, status } = useSession();

  return (
    <main className="p-4">
      {status === AuthStatus.LOADING ? (
        <div className="flex flex-col gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-5 w-64" />
        </div>
      ) : (
        <>
          <figure
            className={`object-cover w-12 h-12 rounded-full overflow-hidden ${
              session?.user?.image ? "" : "bg-slate-300 p-1"
            }`}
          >
            <img
              src={session?.user?.image || "/images/empty-user.svg"}
              alt={session?.user?.name || ""}
            />
          </figure>
          <h1 className="text-2xl font-bold">Hello {session?.user?.name}</h1>
          <h2>{session?.user?.email}</h2>
          <h3>{session?.user?.id}</h3>
          <Button variant="destructive" onClick={() => signOut()}>
            Logout
          </Button>
        </>
      )}
    </main>
  );
}
