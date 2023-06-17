import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '../../app/store';

export interface QuizState {
  currentQuestion: number;
  status: 'idle' | 'running' | 'finished';
  settings: QuizSettings | null;
  // Some kind of `questions` object
}

// TODO: Build out what all needs to be stored here
interface QuizSettings {
  numQuestions: number;
}

const initialState: QuizState = {
  currentQuestion: 0,
  status: 'idle',
  settings: null,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz: (state, action: PayloadAction<QuizSettings>) => {
      state.currentQuestion = 1;
      state.status = 'running';
      state.settings = action.payload;
    },
    completeQuiz: (state) => {
      state.status = 'finished';
    },
    quitQuiz: (state) => {
      state.currentQuestion = 0;
      state.status = 'idle';
    },
    nextQuestion: (state) => {
      state.currentQuestion += 1;
    },
    previousQuestion: (state) => {
      state.currentQuestion -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCurrentQuestion: (state, action: PayloadAction<number>) => {
      state.currentQuestion += action.payload;
    },
  },
});

export const {
  startQuiz,
  completeQuiz,
  quitQuiz,
  nextQuestion,
  previousQuestion,
  setCurrentQuestion,
} = quizSlice.actions;

export const selectCurrentQuestion = (state: RootState) => state.quiz.currentQuestion;
export const selectQuizStatus = (state: RootState) => state.quiz.status;
export const selectQuizSettings = (state: RootState) => state.quiz.settings;

export default quizSlice.reducer;
