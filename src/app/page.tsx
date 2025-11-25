import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { ArrowRight } from "lucide-react";

export default function WelcomePage() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-8 rounded-lg bg-card/80 p-12 shadow-2xl backdrop-blur-lg">
        <Logo />
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold text-primary-foreground">
            Welcome to the
          </h1>
          <h2 className="font-headline text-5xl font-bold text-primary">
            HWHS Exam Portal
          </h2>
          <p className="mt-2 text-muted-foreground">
            Holy Writ High School and Junior College
          </p>
        </div>
        <Button asChild size="lg">
          <Link href="/auth">
            Enter Portal <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
