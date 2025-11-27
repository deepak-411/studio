
'use client';

export type ScheduledExam = {
  selectedClass: string;
  selectedSection: string;
  selectedSet: string;
};

export type ExamResult = {
    robotics: number; // MCQ score
    coding: number; // -1 if pending, otherwise score
}

const EXAM_STORAGE_KEY = 'activeExam';
const RESULTS_STORAGE_KEY = 'examResults';
const ATTEMPTS_STORAGE_KEY = 'examAttempts';

export function storeExam(exam: ScheduledExam) {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(exam));
  }
}

export function getStoredExam(): ScheduledExam | null {
  if (typeof window !== 'undefined') {
    const storedExam = window.localStorage.getItem(EXAM_STORAGE_KEY);
    if (storedExam) {
      try {
        return JSON.parse(storedExam);
      } catch (e) {
        console.error("Failed to parse stored exam data", e);
        return null;
      }
    }
  }
  return null;
}

// --- Result Management ---
export function storeResult(studentId: string, examId: string, result: ExamResult) {
  if (typeof window !== 'undefined') {
    const allResults = getStoredResults();
    if (!allResults[studentId]) {
      allResults[studentId] = {};
    }
    allResults[studentId][examId] = result;
    window.localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(allResults));
  }
}

export function getStoredResults(): { [studentId: string]: { [examId: string]: ExamResult } } {
  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem(RESULTS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  }
  return {};
}

export function getResultForStudent(studentId: string, examId: string): ExamResult | null {
    if (typeof window !== 'undefined') {
        const allResults = getStoredResults();
        return allResults[studentId]?.[examId] || null;
    }
    return null;
}


// --- Attempt Management ---

function getStoredAttempts(): { [key: string]: boolean } {
    if (typeof window !== 'undefined') {
        const stored = window.localStorage.getItem(ATTEMPTS_STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    }
    return {};
}

export function markExamAsAttempted(studentId: string, examId: string) {
    if (typeof window !== 'undefined') {
        const attempts = getStoredAttempts();
        const attemptKey = `${studentId}_${examId}`;
        attempts[attemptKey] = true;
        window.localStorage.setItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(attempts));
    }
}

export function hasAttemptedExam(studentId: string, examId: string): boolean {
    if (typeof window !== 'undefined') {
        const attempts = getStoredAttempts();
        const attemptKey = `${studentId}_${examId}`;
        return attempts[attemptKey] || false;
    }
    return false;
}
