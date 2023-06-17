import { useAppSelector } from '../../app/hooks';
import { selectQuizSettings } from './quizSlice';

export function useQuizSettings() {
  const quizSettings = useAppSelector(selectQuizSettings);

  if (!quizSettings) {
    throw new Error('Cannot read quiz settings when a quiz has not been started');
  }

  return quizSettings;
}
