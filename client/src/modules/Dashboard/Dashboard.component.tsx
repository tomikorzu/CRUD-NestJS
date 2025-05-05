"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { AuthStatus } from "../shared/utils/constants.utils";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "../shared/providers/AuthProvider.provider";

export default function Dashboard() {
  const { user, status } = useAuth();

  return (
    <main className="p-4">
      {status !== AuthStatus.AUTHENTICATED || user === null ? (
        <div className="flex flex-col gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-5 w-64" />
        </div>
      ) : (
        <>
          <figure
            className={`object-cover w-12 h-12 rounded-full overflow-hidden ${
              user?.image ? "" : "bg-slate-300 p-1"
            }`}
          >
            <img
              src={user?.image || "/images/empty-user.svg"}
              alt={user?.name || ""}
            />
          </figure>
          <h1 className="text-2xl font-bold">Hello {user?.name}</h1>
          <h2>{user?.email}</h2>
          <h3>{user?.id}</h3>
          <h4>{user?.role}</h4>
          <h5>{user?.position}</h5>
          <h6>{user?.seniority}</h6>
          <h6>{user?.phoneNumber}</h6>
          <h6>{user?.address}</h6>
          <h6>{user?.dni}</h6>
          <h6>{user?.startDate}</h6>
          <h6>{user?.endDate}</h6>
          <Button variant="destructive" onClick={() => signOut()}>
            Logout
          </Button>
        </>
      )}
    </main>
  );
}
