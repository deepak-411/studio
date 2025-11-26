
'use client';

export type ScheduledExam = {
  selectedClass: string;
  selectedSection: string;
  selectedSet: string;
};

const EXAM_STORAGE_KEY = 'activeExam';

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
