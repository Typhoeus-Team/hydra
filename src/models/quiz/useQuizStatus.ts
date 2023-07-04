import { useAppSelector } from '../../app/hooks';
import { selectQuizStatus } from './quizSlice';

export function useQuizStatus() {
  const quizStatus = useAppSelector(selectQuizStatus);

  return quizStatus;
}
