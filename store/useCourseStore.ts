import { create } from 'zustand';

interface CourseState {
  currentCourse: any | null;
  currentSession: any | null;
  progress: {
    completedSessions: string[];
    examsPassed: string[];
  };
  setCurrentCourse: (course: any) => void;
  setCurrentSession: (session: any) => void;
  markSessionComplete: (sessionId: string) => void;
  markExamPassed: (examId: string) => void;
}

export const useCourseStore = create<CourseState>((set) => ({
  currentCourse: null,
  currentSession: null,
  progress: {
    completedSessions: [],
    examsPassed: [],
  },
  setCurrentCourse: (course) => set({ currentCourse: course }),
  setCurrentSession: (session) => set({ currentSession: session }),
  markSessionComplete: (sessionId) =>
    set((state) => ({
      progress: {
        ...state.progress,
        completedSessions: [...state.progress.completedSessions, sessionId],
      },
    })),
  markExamPassed: (examId) =>
    set((state) => ({
      progress: {
        ...state.progress,
        examsPassed: [...state.progress.examsPassed, examId],
      },
    })),
}));