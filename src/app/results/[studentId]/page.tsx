
'use client';
import Marksheet from "@/components/results/Marksheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { type User } from "@/lib/user-store";
import { getStoredExams, getResultForStudent, type ExamResult, type ScheduledExam } from "@/lib/exam-store";


type MarksheetData = {
    name: string;
    rollNumber: string;
    class: string;
    section: string;
    exam: string;
    marks: ExamResult;
    totalMarks: { robotics: number; coding: number; };
}

export default function ResultPage() {
    const params = useParams();
    const studentId = params.studentId as string;
    const [studentResult, setStudentResult] = useState<MarksheetData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!studentId) return;

        const allUsers = JSON.parse(localStorage.getItem('hwhs_users') || '[]') as User[];
        const userForMarksheet = allUsers.find(u => u.rollNumber === studentId);
        
        if (userForMarksheet) {
            const allExams = getStoredExams();
            // Find the exam this student would have taken
            const examForStudent = allExams.find(e => e.selectedClass === userForMarksheet.class && e.selectedSection === userForMarksheet.section);

            if (examForStudent) {
                 const result = getResultForStudent(userForMarksheet.rollNumber, examForStudent.selectedSet);

                if (result) {
                    setStudentResult({
                        name: userForMarksheet.name,
                        rollNumber: userForMarksheet.rollNumber,
                        class: userForMarksheet.class,
                        section: userForMarksheet.section,
                        exam: `Robotics and AI Examination 2025 (Set ${examForStudent.selectedSet})`,
                        marks: result,
                        totalMarks: {
                            robotics: 80,
                            coding: 20
                        }
                    });
                }
            }
        }
        setIsLoading(false);
    }, [studentId]);
    
    const handlePrint = () => {
        window.print();
    };

    if (isLoading) {
        return <div className="flex h-screen items-center justify-center"><p>Loading results...</p></div>
    }

    if (!studentResult) {
        return (
             <div className="flex h-screen items-center justify-center text-center">
                <div>
                    <h2 className="text-2xl font-bold mb-4">No Result Found</h2>
                    <p className="text-muted-foreground mb-4">Results for this student have not been published or the exam hasn't been attempted yet.</p>
                     <Button asChild>
                        <Link href="/student/dashboard"><ArrowLeft className="mr-2"/> Back to Dashboard</Link>
                    </Button>
                </div>
            </div>
        )
    }

    const obtainedTotal = (studentResult.marks.robotics >= 0 ? studentResult.marks.robotics : 0) + (studentResult.marks.coding >= 0 ? studentResult.marks.coding : 0);
    const maximumTotal = studentResult.totalMarks.robotics + studentResult.totalMarks.coding;
    const isCodingEvaluated = studentResult.marks.coding >= 0;

    return (
        <div className="p-4 sm:p-6 md:p-8">
             <div className="container mx-auto">
                <div className="flex items-center justify-between gap-4 mb-8 print:hidden">
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="icon" asChild>
                            <Link href="/student/dashboard"><ArrowLeft/></Link>
                        </Button>
                        <h1 className="font-headline text-4xl font-bold">
                            Your Result
                        </h1>
                    </div>
                     <Button onClick={handlePrint}>
                        <Printer className="mr-2"/>
                        Print Marksheet
                    </Button>
                </div>
                <div className="printable-content">
                    <Marksheet 
                        studentName={studentResult.name}
                        rollNumber={studentResult.rollNumber}
                        className={studentResult.class}
                        section={studentResult.section}
                        examTitle={studentResult.exam}
                        roboticsMarks={studentResult.marks.robotics}
                        codingMarks={isCodingEvaluated ? studentResult.marks.coding : "Pending"}
                        totalObtained={obtainedTotal}
                        totalMax={maximumTotal}
                        isFinal={isCodingEvaluated}
                    />
                </div>
            </div>
        </div>
    )
}
