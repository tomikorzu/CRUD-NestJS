"use client";

import { createContext, useContext } from "react";
import { AuthStatus, Roles } from "../utils/constants.utils";
import { ChildrenProp } from "../interfaces/common.interface";
import { useSession } from "next-auth/react";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface User {
  id: string;
  name: string;
  email: string;
  role: Roles;
  image?: string;
  position: string;
  seniority: string;
  phoneNumber: string;
  address: string;
  dni: string;
  startDate: string;
  endDate: string;
}

interface AuthContextType {
  user: User | null;
  status: AuthStatus;
  isError: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  status: AuthStatus.LOADING,
  isError: false,
});

export default function AuthProvider({ children }: ChildrenProp) {
  const { data: session, status } = useSession();

  const userId = session?.user?.id;

  const { data, isLoading, isError } = useQuery<User>({
    queryKey: ["users", userId],
    queryFn: async () => {
      const res = await api.get(`/users/${userId}`);
      return res.data;
    },
    enabled: !!userId && status === AuthStatus.AUTHENTICATED,
    retry: false,
  });

  return (
    <AuthContext.Provider
      value={{
        user: data ?? null,
        status: isLoading ? AuthStatus.LOADING : AuthStatus.AUTHENTICATED,
        isError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
