import CodeEvaluationClient from "@/components/faculty/CodeEvaluationClient";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CodeEvaluationPage() {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="icon" asChild>
                <Link href="/faculty/dashboard"><ArrowLeft/></Link>
            </Button>
            <h1 className="font-headline text-4xl font-bold">
            AI-Assisted Code Evaluation
            </h1>
        </div>
        <CodeEvaluationClient />
      </div>
    </div>
  );
}
