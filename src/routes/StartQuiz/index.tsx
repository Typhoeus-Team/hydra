import {
  Container,
  FormControl,
  type FormControlProps,
  FormLabel,
  Heading,
  Select,
  RadioGroup,
  Radio,
  HStack,
  Flex,
  Button,
  Checkbox,
  Stack,
} from '@chakra-ui/react';
import { type FormEventHandler } from 'react';

export function StartQuiz() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // TODO: Do stuff
  };

  return (
    <Container maxW="100%" centerContent py="8">
      <Container
        centerContent
        maxW="550px"
        border="2px solid"
        borderColor="blue.400"
        rounded="md"
        p="4"
      >
        <Heading as="h2" size="lg" color="blue.700" mb="4">
          Quiz Setup
        </Heading>

        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="4">
            <InlineFormControl>
              <FormLabel>Language:</FormLabel>
              <Select>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </Select>
            </InlineFormControl>

            <InlineFormControl>
              <FormLabel>Type:</FormLabel>
              <RadioGroup defaultValue="conjugation">
                <HStack spacing="2">
                  <Radio colorScheme="blue" value="conjugation">
                    Conjugation
                  </Radio>
                  <Radio colorScheme="blue" value="declension">
                    Declension
                  </Radio>
                </HStack>
              </RadioGroup>
            </InlineFormControl>

            <InlineFormControl>
              <FormLabel>Tense:</FormLabel>
              <Stack spacing="2" direction={['column', 'row']}>
                <Checkbox colorScheme="blue" defaultChecked value="present">
                  Present
                </Checkbox>
                <Checkbox colorScheme="blue" defaultChecked value="preterite">
                  Preterite
                </Checkbox>
                <Checkbox colorScheme="blue" defaultChecked value="future">
                  Future
                </Checkbox>
                <Checkbox colorScheme="blue" defaultChecked value="conditional">
                  Conditional
                </Checkbox>
              </Stack>
            </InlineFormControl>
          </Flex>

          <Flex alignItems="center" justifyContent="center" mt="6">
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      </Container>
    </Container>
  );
}

function InlineFormControl(props: FormControlProps) {
  return <FormControl {...props} display="flex" alignItems="center" />;
}
