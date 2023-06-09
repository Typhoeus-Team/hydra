import { Container } from '@chakra-ui/react';
import { StartQuizForm } from '../../features/quiz/StartQuizForm';

export function StartQuiz() {
  return (
    <Container maxW="100%" centerContent py="8">
      <StartQuizForm />
    </Container>
  );
}
