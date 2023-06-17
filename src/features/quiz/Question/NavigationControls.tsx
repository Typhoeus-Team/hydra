import { Button, Flex, Spacer } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  completeQuiz,
  nextQuestion,
  previousQuestion,
  selectCurrentQuestion,
  selectQuizSettings,
} from '../quizSlice';
import { useNavigate } from 'react-router-dom';

export function NavigationControls() {
  const currentQuestion = useAppSelector(selectCurrentQuestion);
  const quizSettings = useAppSelector(selectQuizSettings);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (currentQuestion < quizSettings.numQuestions) {
      dispatch(nextQuestion());
    } else {
      dispatch(completeQuiz());
      navigate('/quiz-results');
    }
  };

  return (
    <Flex>
      <Button onClick={() => dispatch(previousQuestion())} isDisabled={currentQuestion <= 1}>
        Previous
      </Button>
      <Spacer />
      <Button onClick={handleNextQuestion}>Next</Button>
    </Flex>
  );
}
