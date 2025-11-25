import StudentRegisterForm from "@/components/auth/StudentRegisterForm";
import Logo from "@/components/Logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function StudentRegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card/90 backdrop-blur-lg">
        <CardHeader className="items-center text-center">
          <Logo />
          <CardTitle className="font-headline text-3xl">Student Registration</CardTitle>
          <CardDescription>
            Create your account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <StudentRegisterForm />
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/auth/student/login" className="underline text-primary">
              Login here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
