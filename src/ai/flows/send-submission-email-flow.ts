
'use server';
/**
 * @fileOverview An AI flow to format and send exam submission details via email.
 *
 * - sendSubmissionEmail - A function that takes submission data and sends it.
 * - SubmissionData - The input type for the sendSubmissionEmail function.
 */

import { ai } from '@/ai/genkit';
import type { User } from '@/lib/user-store';
import { z } from 'genkit';

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

export async function sendSubmissionEmail(input: SubmissionData): Promise<void> {
  await emailSendingFlow(input);
}


const emailPrompt = ai.definePrompt({
    name: 'submissionEmailPrompt',
    input: { schema: SubmissionDataSchema },
    prompt: `
      Generate a plain text summary for an exam submission email. Do not use Markdown or HTML.
      The email should be sent to dk3624897@gmail.com.
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


const emailSendingFlow = ai.defineFlow(
  {
    name: 'emailSendingFlow',
    inputSchema: SubmissionDataSchema,
    outputSchema: z.void(),
  },
  async (submission) => {
    const { output } = await emailPrompt(submission);

    // In a real application, you would integrate an email sending service here.
    // For this example, we will log the formatted email content to the console,
    // which simulates the 'sending' of the email by the server-side flow.
    console.log("--- SIMULATING EMAIL SEND ---");
    console.log(output);
    console.log("--- END OF SIMULATED EMAIL ---");
  }
);

    