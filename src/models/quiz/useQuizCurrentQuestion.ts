import { useAppSelector } from '../../app/hooks';
import { selectCurrentQuestion } from './quizSlice';

export function useQuizCurrentQuestion() {
  const currentQuestion = useAppSelector(selectCurrentQuestion);

  return currentQuestion;
}
