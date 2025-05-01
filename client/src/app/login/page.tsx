"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FaFacebook,
  FaApple,
  FaGoogle,
  FaExternalLinkAlt,
} from "react-icons/fa";
import ProviderButton from "./components/ProviderButton.component";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-2xl">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold">
            Welcome to Back Office
          </CardTitle>
          <CardDescription className="text-lg">
            Sign in to create or continue your work
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <ProviderButton provider="google" Icon={<FaGoogle />} />
          <ProviderButton provider="facebook" Icon={<FaFacebook />} />
          <ProviderButton provider="apple" Icon={<FaApple />} />

          <div className="flex items-center relative my-4">
            <Separator />
            <span className="text-center bg-background absolute left-1/2 -translate-x-1/2 px-2">
              Or
            </span>
          </div>

          <Link href="/">
            <Button
              variant="default"
              className="w-full h-12 mt-3 text-md bg-foreground text-background opacity-70 hover:bg-foreground hover:opacity-100"
            >
              <FaExternalLinkAlt className="w-6 h-6 mr-2" />
              Go to the Main Website
            </Button>
          </Link>

          <p className="text-center text-sm text-muted-foreground mt-4">
            By continuing, you agree to our{" "}
            <a href="#" className="underline hover:text-foreground">
              Terms of service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-foreground">
              Privacy policy
            </a>
            {/* TODO: Add terms and privacy policy */}
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
