import { Button, Flex, Heading } from '@chakra-ui/react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export function Root() {
  const location = useLocation();

  return (
    <Flex width="100vw" height="100vh" direction="column">
      <Flex width="100%" p="4" bgColor="teal.300" gap="4">
        <Heading as="h1" size="lg" color="teal.900">
          Hydra
        </Heading>
        {location.pathname === '/start-quiz' ? (
          <Button as={Link} colorScheme="purple" to="/">
            Home
          </Button>
        ) : (
          <Button as={Link} colorScheme="purple" to="/start-quiz">
            Start Quiz
          </Button>
        )}
      </Flex>
      <Outlet />
    </Flex>
  );
}
