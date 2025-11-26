
'use client';
import Marksheet from "@/components/results/Marksheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ResultPage() {
    const params = useParams();
    const studentId = params.studentId as string;

    // Mock data for a student
    const studentResult = {
        name: "Jane Doe",
        rollNumber: studentId,
        class: "10",
        section: "A",
        exam: "Mid-Term Examination 2024",
        marks: {
            robotics: 65,
            coding: 15,
        },
        totalMarks: {
            robotics: 80,
            coding: 20
        }
    };

    const obtainedTotal = studentResult.marks.robotics + studentResult.marks.coding;
    const maximumTotal = studentResult.totalMarks.robotics + studentResult.totalMarks.coding;
    
    const handlePrint = () => {
        window.print();
    };


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
