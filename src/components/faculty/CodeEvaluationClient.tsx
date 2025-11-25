"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { evaluateCode, type CodeEvaluationInput, type CodeEvaluationOutput } from "@/ai/flows/code-evaluation-tool";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bot, Loader2, Wand2 } from "lucide-react";

const sampleCode = `<html>
  <head>
    <title>Student Info</title>
    <style>
      body { font-family: sans-serif; }
      .card { border: 1px solid #ccc; padding: 16px; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Holy Writ High School</h1>
      <h2>Jane Doe</h2>
      <p>Subject: Robotics & AI</p>
      <p>Marks: 85</p>
    </div>
  </body>
</html>
`;

export default function CodeEvaluationClient() {
  const { register, handleSubmit, setValue } = useForm<CodeEvaluationInput>({
    defaultValues: {
        code: sampleCode,
        expectedOutput: "A webpage displaying school name, student name, subject, and marks.",
        language: "html",
        criteria: "Correct use of HTML tags for structure. Basic CSS for styling. All required information must be present."
    }
  });
  const [evaluationResult, setEvaluationResult] = useState<CodeEvaluationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<CodeEvaluationInput> = async (data) => {
    setIsLoading(true);
    setEvaluationResult(null);
    try {
      const result = await evaluateCode(data);
      setEvaluationResult(result);
    } catch (error) {
      console.error("Evaluation failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
            <CardHeader>
                <CardTitle>Submission Details</CardTitle>
                <CardDescription>Enter the student's code and evaluation parameters.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <Label htmlFor="language">Language</Label>
                        <Select defaultValue="html" onValueChange={(value) => setValue('language', value)}>
                            <SelectTrigger id="language">
                                <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="html">HTML/CSS</SelectItem>
                                <SelectItem value="javascript">JavaScript</SelectItem>
                                <SelectItem value="python">Python</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="code">Student Code</Label>
                        <Textarea id="code" {...register("code")} rows={15} className="font-code" />
                    </div>
                    <div>
                        <Label htmlFor="criteria">Evaluation Criteria</Label>
                        <Textarea id="criteria" {...register("criteria")} rows={3} />
                    </div>
                    <div>
                        <Label htmlFor="expectedOutput">Expected Output</Label>
                        <Input id="expectedOutput" {...register("expectedOutput")} />
                    </div>
                    <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Evaluating...
                            </>
                        ) : (
                             <>
                                <Wand2 className="mr-2 h-4 w-4" />
                                Evaluate with AI
                            </>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>

        <Card className="h-fit sticky top-24">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Bot /> AI-Assisted Feedback</CardTitle>
                <CardDescription>The AI's suggestion will appear here.</CardDescription>
            </CardHeader>
            <CardContent>
                {isLoading && (
                    <div className="flex flex-col items-center justify-center h-64">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        <p className="mt-4 text-muted-foreground">Analyzing code...</p>
                    </div>
                )}
                {evaluationResult && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-lg">Suggested Score</h3>
                            <p className="text-4xl font-bold text-primary">{evaluationResult.suggestedScore} <span className="text-lg font-normal text-muted-foreground">/ 20</span></p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Feedback</h3>
                            <p className="text-muted-foreground whitespace-pre-wrap">{evaluationResult.aiAssistedFeedback}</p>
                        </div>
                        <div className="flex gap-4">
                            <Button>Approve Score & Feedback</Button>
                            <Button variant="secondary">Manually Adjust</Button>
                        </div>
                    </div>
                )}
                {!isLoading && !evaluationResult && (
                    <div className="flex flex-col items-center justify-center h-64 text-center">
                        <p className="text-muted-foreground">Results will be displayed here after evaluation.</p>
                    </div>
                )}
            </CardContent>
        </Card>
    </div>
  );
}
