import { Button, Flex, Spacer } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
  useQuizSettings,
  useDispatchQuizActions,
  useQuizCurrentQuestion,
} from '../../../models/quiz';

export function NavigationControls() {
  const currentQuestion = useQuizCurrentQuestion();
  const quizSettings = useQuizSettings();
  const { nextQuestion, completeQuiz, previousQuestion } = useDispatchQuizActions();
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (currentQuestion < quizSettings.numQuestions) {
      nextQuestion();
    } else {
      completeQuiz();
      navigate('/quiz-results');
    }
  };

  return (
    <Flex>
      <Button
        onClick={() => {
          previousQuestion();
        }}
        isDisabled={currentQuestion <= 1}
      >
        Previous
      </Button>
      <Spacer />
      <Button onClick={handleNextQuestion}>Next</Button>
    </Flex>
  );
}
