
"use client";

import { useState, useEffect } from "react";
import { questions, type Question } from "@/lib/questions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Timer from "./Timer";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { Code, Send } from "lucide-react";

type ExamStatus = "loading" | "mcq" | "coding" | "submitted";
type Answers = { [key: number]: string };

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default function ExamClient({ examId }: { examId: string }) {
  const [status, setStatus] = useState<ExamStatus>("loading");
  const [mcqQuestions, setMcqQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [codingAnswer, setCodingAnswer] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const questionSetIndex = parseInt(examId, 10) - 1;
    if (isNaN(questionSetIndex) || questionSetIndex < 0 || questionSetIndex >= 8) {
        console.error("Invalid exam set ID");
        setMcqQuestions([]);
        setStatus("submitted");
        return;
    }
    
    const questionsPerSet = 30;
    const start = questionSetIndex * questionsPerSet;
    const end = start + questionsPerSet;
    
    if (questions.length < end) {
        console.error("Not enough questions in the question bank for all sets.");
        setMcqQuestions(shuffleArray(questions).slice(0, 30));
    } else {
        const examQuestions = questions.slice(start, end);
        setMcqQuestions(shuffleArray(examQuestions));
    }
    
    setStatus("mcq");
  }, [examId]);

  const currentQuestion = mcqQuestions[currentQuestionIndex];

  const handleNextQuestion = () => {
    // If no answer is selected, we just move on when time is up.
    // A toast message for manual navigation is fine.
    if (currentQuestionIndex < mcqQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStatus("coding");
    }
  };

  const handleManualNext = () => {
     if (!answers[currentQuestion.id]) {
      toast({
        variant: "destructive",
        title: "No option selected",
        description: "Please select an option before proceeding.",
      });
      return;
    }
    handleNextQuestion();
  }

  const handleCodingTimeUp = () => {
     toast({
      title: "Time's up!",
      description: "Submitting your exam now.",
    });
    handleSubmitExam();
  }

  const handleSubmitExam = () => {
    let score = 0;
    mcqQuestions.forEach(q => {
        if (answers[q.id] === q.answer) {
            score++;
        }
    });

    const totalMcq = mcqQuestions.length;
    const mcqScore = (score / totalMcq) * 80;

    console.log("--- EXAM SUBMISSION ---");
    console.log(`Exam ID: ${examId}`);
    console.log("MCQ Answers:", answers);
    console.log(`MCQ Score: ${score}/${totalMcq}`);
    console.log("Coding Answer:", codingAnswer);
    console.log("--- SENDING TO: dk3624897@gmail.com ---");
    
    toast({
        title: "Exam Submitted!",
        description: "Your submission has been recorded. Good luck!",
    });
    
    setStatus("submitted");
  };

  if (status === "loading" || !currentQuestion) {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col items-center space-y-4">
                 <p className="text-lg">Loading Exam...</p>
                 <Progress value={50} className="w-64 animate-pulse" />
            </div>
        </div>
    );
  }
  
  if (status === "submitted") {
    return (
        <div className="flex h-screen items-center justify-center">
            <Card className="w-full max-w-lg text-center">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">Submission Successful!</CardTitle>
                    <CardDescription>Your exam has been submitted for evaluation.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Your results will be published by the faculty soon. You can check your dashboard for updates.</p>
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full">
                        <Link href="/student/dashboard">Back to Dashboard</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
  }

  return (
    <div className="flex h-screen w-screen flex-col">
      {status === 'mcq' && (
         <Card className="flex h-full w-full flex-col rounded-none border-0">
         <CardHeader>
           <div className="flex justify-between items-start">
             <div>
               <CardTitle className="font-headline text-3xl">
                 Mid-Term Examination
               </CardTitle>
               <CardDescription>
                 Question {currentQuestionIndex + 1} of {mcqQuestions.length}
               </CardDescription>
             </div>
             <Timer initialTime={60} onTimeUp={handleNextQuestion} playSound={true} key={`${status}-${currentQuestionIndex}`}/>
           </div>
           <Progress value={((currentQuestionIndex + 1) / mcqQuestions.length) * 100} className="mt-4" />
         </CardHeader>
         <CardContent className="flex-1 overflow-y-auto">
           <h2 className="text-lg font-semibold mb-6">{currentQuestion.question}</h2>
           <RadioGroup
             value={answers[currentQuestion.id] || ""}
             onValueChange={(value) =>
               setAnswers({ ...answers, [currentQuestion.id]: value })
             }
             className="space-y-4"
           >
             {currentQuestion.options.map((option, index) => (
               <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted transition-colors">
                 <RadioGroupItem value={option} id={`option-${index}`} />
                 <Label htmlFor={`option-${index}`} className="flex-1 text-base cursor-pointer">{option}</Label>
               </div>
             ))}
           </RadioGroup>
         </CardContent>
         <CardFooter className="justify-end border-t pt-4">
           <Button onClick={handleManualNext}>
             {currentQuestionIndex === mcqQuestions.length - 1 ? "Proceed to Coding Section" : "Next Question"}
           </Button>
         </CardFooter>
       </Card>
      )}
      {status === 'coding' && (
         <div className="flex h-screen w-screen flex-col">
              <Card className="flex h-full w-full flex-col rounded-none border-0">
                 <CardHeader>
                     <div className="flex justify-between items-center">
                         <div>
                             <CardTitle className="font-headline text-2xl flex items-center gap-2"><Code /> Coding Challenge</CardTitle>
                             <CardDescription>20 Marks</CardDescription>
                         </div>
                         <Timer initialTime={600} onTimeUp={handleCodingTimeUp} playSound={true} key={status} />
                     </div>
                 </CardHeader>
                 <CardContent className="flex flex-1 flex-col space-y-4">
                     <p className="font-semibold">Question: Write HTML and CSS code to display your school name, your name, subject, and marks.</p>
                     <Textarea 
                         placeholder="Write your code here..." 
                         className="font-code flex-1 bg-muted/50"
                         value={codingAnswer}
                         onChange={(e) => setCodingAnswer(e.target.value)}
                     />
                 </CardContent>
                 <CardFooter className="justify-between border-t pt-4">
                     <Button variant="secondary">Run Code (Mock)</Button>
                     <Button onClick={handleSubmitExam}>Submit Exam <Send className="ml-2"/></Button>
                 </CardFooter>
              </Card>
         </div>
      )}
    </div>
  );
}
