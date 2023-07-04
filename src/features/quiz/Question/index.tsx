import { Card, CardBody, Text } from '@chakra-ui/react';
import { NavigationControls } from './NavigationControls';
import { useQuizCurrentQuestion } from '../../../models/quiz';

export function Question() {
  const currentQuestion = useQuizCurrentQuestion();
  return (
    <Card minW={500}>
      <CardBody>
        <Text mb={6}>Question #{currentQuestion}</Text>
        <NavigationControls />
      </CardBody>
    </Card>
  );
}
