import ExamClient from "@/components/exam/ExamClient";

export default function ExamPage({ params }: { params: { examId: string } }) {
  return (
    <div>
      <ExamClient examId={params.examId} />
    </div>
  );
}
