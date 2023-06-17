import { Card, CardBody, Text } from '@chakra-ui/react';
import { useAppSelector } from '../../../app/hooks';
import { selectCurrentQuestion } from '../../../models/quizSettings/quizSlice';
import { NavigationControls } from './NavigationControls';

export function Question() {
  const currentQuestion = useAppSelector(selectCurrentQuestion);
  return (
    <Card minW={500}>
      <CardBody>
        <Text mb={6}>Question #{currentQuestion}</Text>
        <NavigationControls />
      </CardBody>
    </Card>
  );
}
