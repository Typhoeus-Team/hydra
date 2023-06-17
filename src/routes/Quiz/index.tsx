import { Container } from '@chakra-ui/react';
import { Question } from '../../features/quiz/Question';

export function Quiz() {
  return (
    <Container maxW="100%" centerContent py="8">
      <Question />
    </Container>
  );
}
