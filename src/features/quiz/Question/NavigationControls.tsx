import { Button, Flex, Spacer } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { useQuizSettings, quizSlice } from '../../../models/quizSettings';

export function NavigationControls() {
  const currentQuestion = useAppSelector(quizSlice.selectCurrentQuestion);
  const quizSettings = useQuizSettings();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (currentQuestion < quizSettings.numQuestions) {
      dispatch(quizSlice.nextQuestion());
    } else {
      dispatch(quizSlice.completeQuiz());
      navigate('/quiz-results');
    }
  };

  return (
    <Flex>
      <Button
        onClick={() => dispatch(quizSlice.previousQuestion())}
        isDisabled={currentQuestion <= 1}
      >
        Previous
      </Button>
      <Spacer />
      <Button onClick={handleNextQuestion}>Next</Button>
    </Flex>
  );
}
