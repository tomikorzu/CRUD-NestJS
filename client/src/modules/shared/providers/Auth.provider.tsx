"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { ChildrenProp } from "../interfaces/common.interface";
import { User } from "../interfaces/User.interface";
import Cookies from "js-cookie";
import { Roles } from "../types/Roles.enum";

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: ChildrenProp) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;
  const isAdmin = user?.role === Roles.ADMIN;

  useEffect(() => {
    const cookieUser = Cookies.get("user");
    if (cookieUser) {
      try {
        const parsedUser = JSON.parse(cookieUser);
        setUser(parsedUser);
      } catch (e) {
        console.error("Error parsing user cookie", e);
        Cookies.remove("user");
      }
    }
  }, []);

  const login = (user: User) => {
    Cookies.set("user", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    Cookies.remove("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated, isAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
