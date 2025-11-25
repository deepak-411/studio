'use server';

/**
 * @fileOverview AI-assisted code evaluation tool for faculty members.
 *
 * - evaluateCode - A function that evaluates student code submissions with AI assistance.
 * - CodeEvaluationInput - The input type for the evaluateCode function.
 * - CodeEvaluationOutput - The return type for the evaluateCode function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CodeEvaluationInputSchema = z.object({
  code: z.string().describe('The code submitted by the student.'),
  expectedOutput: z.string().describe('The expected output of the code.'),
  language: z.string().describe('The programming language of the code.'),
  criteria: z.string().describe('The evaluation criteria provided by the faculty.'),
});

export type CodeEvaluationInput = z.infer<typeof CodeEvaluationInputSchema>;

const CodeEvaluationOutputSchema = z.object({
  aiAssistedFeedback: z.string().describe('AI-generated feedback on the code submission.'),
  suggestedScore: z.number().describe('AI-suggested score for the code submission.'),
});

export type CodeEvaluationOutput = z.infer<typeof CodeEvaluationOutputSchema>;

export async function evaluateCode(input: CodeEvaluationInput): Promise<CodeEvaluationOutput> {
  return evaluateCodeFlow(input);
}

const codeEvaluationPrompt = ai.definePrompt({
  name: 'codeEvaluationPrompt',
  input: {schema: CodeEvaluationInputSchema},
  output: {schema: CodeEvaluationOutputSchema},
  prompt: `You are an AI assistant helping faculty members evaluate student code submissions.

  Given the following student code, the expected output, the programming language, and the evaluation criteria, provide feedback and a suggested score.

  Code:
  \`\`\`{{{language}}}
{{{code}}}
  \`\`\`

  Expected Output:
  {{{expectedOutput}}}

  Evaluation Criteria:
  {{{criteria}}}

  Provide constructive feedback and a suggested score based on the evaluation criteria.
  Output should be in the following JSON format:
  {
    "aiAssistedFeedback": "...",
    "suggestedScore": 0
  }`,
});

const evaluateCodeFlow = ai.defineFlow(
  {
    name: 'evaluateCodeFlow',
    inputSchema: CodeEvaluationInputSchema,
    outputSchema: CodeEvaluationOutputSchema,
  },
  async input => {
    const {output} = await codeEvaluationPrompt(input);
    return output!;
  }
);
