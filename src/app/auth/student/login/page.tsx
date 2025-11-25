import StudentLoginForm from "@/components/auth/StudentLoginForm";
import Logo from "@/components/Logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function StudentLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card/90 backdrop-blur-lg">
        <CardHeader className="items-center text-center">
          <Logo />
          <CardTitle className="font-headline text-3xl">Student Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <StudentLoginForm />
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/auth/student/register" className="underline text-primary">
              Register here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
