
'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookCopy, CheckSquare, Presentation, User, List } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getStoredExams, type ScheduledExam } from "@/lib/exam-store";

export default function FacultyDashboard() {
  const [activeExams, setActiveExams] = useState<ScheduledExam[]>([]);

  useEffect(() => {
    setActiveExams(getStoredExams());
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
       <header className="sticky top-0 z-50 w-full border-b bg-card/80 shadow-sm backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-4">
                    <Link href="/">
                       <h1 className="font-headline text-xl font-bold text-foreground">HWHS Portal</h1>
                    </Link>
                </div>
                 <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground hidden sm:inline">Welcome, Faculty</span>
                    <Button variant="outline" size="sm" asChild>
                       <Link href="/auth">
                         Logout
                       </Link>
                    </Button>
                </div>
            </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 md:p-8">
            <div className="container mx-auto">
                <h1 className="font-headline text-4xl font-bold mb-8">Faculty Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                            <User className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">150</div>
                            <p className="text-xs text-muted-foreground">Across all classes</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Exams</CardTitle>
                            <Presentation className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{activeExams.length}</div>
                             <p className="text-xs text-muted-foreground">
                                {activeExams.length > 0 ? `${activeExams.length} schedules active` : 'No active exams'}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Submissions</CardTitle>
                            <CheckSquare className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">5</div>
                            <p className="text-xs text-muted-foreground">Awaiting evaluation</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">AI Tool</CardTitle>
                            <BookCopy className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                             <Link href="/faculty/evaluate">
                                <Button className="w-full">Evaluate Code</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Card className="lg:col-span-1">
                        <CardHeader>
                            <CardTitle>Manage Exams</CardTitle>
                            <CardDescription>Schedule new exams and manage results.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4">
                            <Button asChild>
                                <Link href="/faculty/schedule">Schedule New Exam</Link>
                            </Button>
                            <Button variant="secondary">Publish Results</Button>
                        </CardContent>
                    </Card>

                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><List /> Active Exam Schedules</CardTitle>
                            <CardDescription>The following exams are currently active for students.</CardDescription>
                        </CardHeader>
                        <CardContent>
                           {activeExams.length > 0 ? (
                               <ul className="space-y-2">
                                   {activeExams.map((exam, index) => (
                                       <li key={index} className="flex justify-between items-center p-2 bg-muted rounded-md">
                                           <span>Class <strong>{exam.selectedClass}</strong> - Section <strong>{exam.selectedSection}</strong></span>
                                           <span className="font-mono bg-primary text-primary-foreground px-2 py-1 rounded">Set {exam.selectedSet}</span>
                                       </li>
                                   ))}
                               </ul>
                           ) : (
                               <p className="text-muted-foreground text-center py-8">No exams are currently scheduled.</p>
                           )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    </div>
  )
}
