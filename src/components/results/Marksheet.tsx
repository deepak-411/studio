"use client";

import * as React from "react";
import Logo from "@/components/Logo";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";

type MarksheetProps = {
    studentName: string;
    rollNumber: string;
    className: string;
    section: string;
    examTitle: string;
    roboticsMarks: number;
    codingMarks: number;
    totalObtained: number;
    totalMax: number;
};

export default function Marksheet({
    studentName,
    rollNumber,
    className,
    section,
    examTitle,
    roboticsMarks,
    codingMarks,
    totalObtained,
    totalMax
}: MarksheetProps) {
    const [currentDate, setCurrentDate] = React.useState("");

    React.useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString());
    }, []);

    const grade = (totalObtained / totalMax) >= 0.9 ? 'A1' : (totalObtained / totalMax) >= 0.8 ? 'A2' : (totalObtained / totalMax) >= 0.7 ? 'B1' : 'B2';
  return (
    <Card className="max-w-4xl mx-auto border-2 border-primary shadow-2xl print:shadow-none print:border-none">
        <CardContent className="p-8 md:p-12">
            <header className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="order-2 sm:order-1 text-center sm:text-left">
                    <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                        Holy Writ High School and Junior College
                    </h1>
                    <p className="text-muted-foreground">Academic Session: 2024-2025</p>
                </div>
                <div className="order-1 sm:order-2">
                    <Logo />
                </div>
            </header>

            <div className="my-8 text-center bg-primary text-primary-foreground py-2 rounded-md">
                <h2 className="font-bold text-xl tracking-wider">{examTitle} - Marksheet</h2>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm mb-8">
                <div><span className="font-semibold">Student's Name:</span> {studentName}</div>
                <div><span className="font-semibold">Roll No:</span> {rollNumber}</div>
                <div><span className="font-semibold">Class:</span> {className}</div>
                <div><span className="font-semibold">Section:</span> {section}</div>
            </div>

            <Separator className="my-8"/>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">S.No.</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead className="text-right">Max Marks</TableHead>
                        <TableHead className="text-right">Marks Obtained</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Robotics & AI (MCQ)</TableCell>
                        <TableCell className="text-right">80</TableCell>
                        <TableCell className="text-right">{roboticsMarks}</TableCell>
                    </TableRow>
                     <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>Robotics & AI (Coding)</TableCell>
                        <TableCell className="text-right">20</TableCell>
                        <TableCell className="text-right">{codingMarks}</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow className="bg-muted">
                        <TableCell colSpan={2} className="font-bold">Total</TableCell>
                        <TableCell className="text-right font-bold">{totalMax}</TableCell>
                        <TableCell className="text-right font-bold">{totalObtained}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
            
            <div className="grid grid-cols-2 gap-8 mt-8">
                 <div>
                    <p className="font-bold">Result: <span className="text-primary">PASS</span></p>
                    <p className="font-bold">Grade: <span className="text-primary">{grade}</span></p>
                 </div>
                 <div className="text-right">
                    <p>Date: {currentDate}</p>
                 </div>
            </div>

            <footer className="flex justify-between mt-24 pt-8 border-t">
                <div className="text-center">
                    <Image src="https://picsum.photos/seed/sig1/200/50" data-ai-hint="signature" alt="Vice Principal Signature" width={150} height={40} className="mix-blend-darken" />
                    <p className="border-t border-dashed mt-2 pt-1 font-semibold">Vice Principal</p>
                </div>
                 <div className="text-center">
                    <Image src="https://picsum.photos/seed/sig2/200/50" data-ai-hint="signature" alt="Principal Signature" width={150} height={40} className="mix-blend-darken" />
                    <p className="border-t border-dashed mt-2 pt-1 font-semibold">Principal</p>
                </div>
            </footer>
        </CardContent>
    </Card>
  )
}