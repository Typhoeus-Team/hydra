import { Button, Flex, Heading } from '@chakra-ui/react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { quizSlice } from '../models/quizSettings';

export function Root() {
  const location = useLocation();

  return (
    <Flex width="100vw" height="100vh" direction="column">
      <Flex width="100%" px="4" py="2" bgColor="blue.400" gap="4" height={16} alignItems="center">
        <Heading as="h1" size="lg" color="white" fontWeight="semibold">
          Hydra
        </Heading>
        {location.pathname === '/start-quiz' ? (
          <Button as={Link} colorScheme="gray" to="/">
            Home
          </Button>
        ) : (
          <StartQuizButton />
        )}
      </Flex>
      <Flex width="100%" flex="1" direction="column" overflow="auto" position="relative">
        <Outlet />
      </Flex>
    </Flex>
  );
}

function StartQuizButton() {
  const quizStatus = useAppSelector(quizSlice.selectQuizStatus);
  if (quizStatus === 'running') {
    return null;
  }
  return (
    <Button as={Link} colorScheme="gray" to="/start-quiz">
      Start Quiz
    </Button>
  );
}
