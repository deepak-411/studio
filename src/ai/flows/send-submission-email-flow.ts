
'use server';
/**
 * @fileOverview An AI flow to format and send exam submission details via email.
 *
 * - sendSubmissionEmail - A function that takes submission data and sends it.
 * - SubmissionData - The input type for the sendSubmissionEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const AnsweredQuestionSchema = z.object({
    question: z.string(),
    selectedAnswer: z.string(),
    correctAnswer: z.string(),
    isCorrect: z.boolean(),
});

const StudentSchema = z.object({
    name: z.string(),
    rollNumber: z.string(),
    class: z.string(),
    section: z.string(),
});

const SubmissionDataSchema = z.object({
  student: StudentSchema,
  answeredQuestions: z.array(AnsweredQuestionSchema),
  codingAnswer: z.string(),
  mcqScore: z.number(),
  mcqCorrect: z.number(),
  totalMcqQuestions: z.number(),
});

export type SubmissionData = z.infer<typeof SubmissionDataSchema>;

const EmailSchema = z.object({
    subject: z.string(),
    body: z.string(),
});
export type EmailOutput = z.infer<typeof EmailSchema>;


export async function sendSubmissionEmail(input: SubmissionData): Promise<EmailOutput> {
  return emailFormattingFlow(input);
}


const emailPrompt = ai.definePrompt({
    name: 'submissionEmailPrompt',
    input: { schema: SubmissionDataSchema },
    output: { schema: EmailSchema },
    prompt: `
      Generate a plain text summary for an exam submission email. Do not use Markdown or HTML.
      The output must be a JSON object with 'subject' and 'body' fields.
      The subject must be: "Exam Submission: {{student.name}} - Roll No: {{student.rollNumber}}"

      The body should be structured as follows:

      Student Details:
      - Name: {{student.name}}
      - Roll Number: {{student.rollNumber}}
      - Class: {{student.class}} - {{student.section}}

      Exam Results:
      - MCQ Score: {{mcqCorrect}} / {{totalMcqQuestions}} ({{mcqScore}} / 80 marks)

      Coding Challenge Submission:
      \`\`\`
      {{{codingAnswer}}}
      \`\`\`

      MCQ Answers Breakdown:
      {{#each answeredQuestions}}
      - Question: {{question}}
        - Your Answer: {{selectedAnswer}} {{#if isCorrect}}(Correct){{else}}(Incorrect - Correct was: {{correctAnswer}}){{/if}}
      {{/each}}
    `,
});


const emailFormattingFlow = ai.defineFlow(
  {
    name: 'emailFormattingFlow',
    inputSchema: SubmissionDataSchema,
    outputSchema: EmailSchema,
    retrier: {
      maxAttempts: 3,
      backoff: {
        delay: 1000,
        factor: 2,
      },
    },
  },
  async (submission) => {
    try {
        const { output } = await emailPrompt(submission);
        
        if (!output) {
            throw new Error("AI generation returned no output.");
        }
        
        console.log("Generated Email Content:", output);
        return output;

    } catch (error) {
        console.error("AI email generation failed after multiple retries. Using fallback.", error);
        return {
            subject: `FALLBACK - Exam Submission: ${submission.student.name} - Roll No: ${submission.student.rollNumber}`,
            body: `AI generation failed. Raw data:\n\n${JSON.stringify(submission, null, 2)}`
        };
    }
  }
);
