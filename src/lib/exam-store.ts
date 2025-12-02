
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

const EXAMS_STORAGE_KEY = 'activeExams'; // Changed from EXAM_STORAGE_KEY
const RESULTS_STORAGE_KEY = 'examResults';
const ATTEMPTS_STORAGE_KEY = 'examAttempts';

const DEFAULT_EXAMS: ScheduledExam[] = [
    { selectedClass: '7', selectedSection: 'Daffodils', selectedSet: '1' },
    { selectedClass: '7', selectedSection: 'Daisies', selectedSet: '1' },
    { selectedClass: '8', selectedSection: 'Daffodils', selectedSet: '2' },
    { selectedClass: '8', selectedSection: 'Daisies', selectedSet: '2' },
    { selectedClass: '9', selectedSection: 'Daffodils', selectedSet: '3' },
    { selectedClass: '9', selectedSection: 'Daisies', selectedSet: '3' },
];

export function storeExam(exam: ScheduledExam) {
  if (typeof window !== 'undefined') {
    let exams = getStoredExams();
    // If default exams are still present, clear them before adding a new one manually
    if (JSON.stringify(exams) === JSON.stringify(DEFAULT_EXAMS)) {
        exams = [];
    }
    
    // Prevent duplicate schedules for the same class/section
    const existingIndex = exams.findIndex(e => e.selectedClass === exam.selectedClass && e.selectedSection === exam.selectedSection);
    if (existingIndex > -1) {
        exams[existingIndex] = exam; // Update existing schedule
    } else {
        exams.push(exam); // Add new schedule
    }
    window.localStorage.setItem(EXAMS_STORAGE_KEY, JSON.stringify(exams));
  }
}

export function getStoredExams(): ScheduledExam[] {
  if (typeof window !== 'undefined') {
    const storedExams = window.localStorage.getItem(EXAMS_STORAGE_KEY);
    if (storedExams) {
      try {
        return JSON.parse(storedExams);
      } catch (e) {
        console.error("Failed to parse stored exams data", e);
        return DEFAULT_EXAMS; // Fallback to default
      }
    }
    // If no exams are in localStorage, populate with default
    window.localStorage.setItem(EXAMS_STORAGE_KEY, JSON.stringify(DEFAULT_EXAMS));
    return DEFAULT_EXAMS;
  }
  return [];
}

// Deprecated: use getStoredExams instead
export function getStoredExam(): ScheduledExam | null {
  console.warn("getStoredExam is deprecated. Use getStoredExams or getExamForStudent instead.");
  const exams = getStoredExams();
  return exams.length > 0 ? exams[0] : null;
}

export function getExamForStudent(studentClass: string, studentSection: string): ScheduledExam | null {
    if (typeof window !== 'undefined') {
        const exams = getStoredExams();
        return exams.find(e => e.selectedClass === studentClass && e.selectedSection === studentSection) || null;
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
