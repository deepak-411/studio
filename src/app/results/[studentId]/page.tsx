
'use client';
import Marksheet from "@/components/results/Marksheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurrentUser, findUser, type User } from "@/lib/user-store";


export default function ResultPage() {
    const params = useParams();
    const studentId = params.studentId as string;
    const router = useRouter();
    const [studentResult, setStudentResult] = useState<{
        name: string;
        rollNumber: string;
        class: string;
        section: string;
        exam: string;
        marks: { robotics: number; coding: number; };
        totalMarks: { robotics: number; coding: number; };
    } | null>(null);

    useEffect(() => {
        // In a real app, you'd fetch results from a DB.
        // Here, we'll try to find the student info from localStorage to get their name/class.
        const loggedInUser = getCurrentUser();

        // Let's create a mock result. The name will come from the logged-in user if it matches.
        const mockResult = {
            robotics: 65,
            coding: 15,
        };

        let userForMarksheet: User | undefined = undefined;

        if (loggedInUser && loggedInUser.rollNumber === studentId) {
            userForMarksheet = loggedInUser;
        } else {
             // Fallback to searching all users if the logged in user is not the one we are looking for
             const allUsers = JSON.parse(localStorage.getItem('hwhs_users') || '[]') as User[];
             userForMarksheet = allUsers.find(u => u.rollNumber === studentId);
        }

        if (userForMarksheet) {
            setStudentResult({
                name: userForMarksheet.name,
                rollNumber: userForMarksheet.rollNumber,
                class: userForMarksheet.class,
                section: userForMarksheet.section,
                exam: "Robotics and AI Examination 2025",
                marks: mockResult,
                totalMarks: {
                    robotics: 80,
                    coding: 20
                }
            });
        } else {
             // If no user is found, you might want to show a "Not Found" page or redirect.
             console.log("Student not found for marksheet");
        }


    }, [studentId]);
    
    const handlePrint = () => {
        window.print();
    };

    if (!studentResult) {
        return <div className="flex h-screen items-center justify-center"><p>Loading results...</p></div>
    }

    const obtainedTotal = studentResult.marks.robotics + studentResult.marks.coding;
    const maximumTotal = studentResult.totalMarks.robotics + studentResult.totalMarks.coding;

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
                        codingMarks={studentResult.marks.coding}
                        totalObtained={obtainedTotal}
                        totalMax={maximumTotal}
                    />
                </div>
            </div>
        </div>
    )
}
