import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

interface ProviderButtonProps {
  Icon?: React.ReactNode;
  provider: string;
}

export default function ProviderButton({
  Icon,
  provider,
}: ProviderButtonProps) {
  return (
    <Button
      onClick={() => signIn(provider)}
      variant="outline"
      className="w-full h-12 text-md font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-[.3s]"
    >
      {Icon && Icon}
      <p className="capitalize">Continue with {provider}</p>
    </Button>
  );
}
