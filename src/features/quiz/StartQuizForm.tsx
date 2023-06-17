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
  SimpleGrid,
  Input,
} from '@chakra-ui/react';
import { type FormEventHandler } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { startQuiz } from './quizSlice';
import { useNavigate } from 'react-router-dom';

export function StartQuizForm() {
  const naviate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    dispatch(startQuiz({ numQuestions: parseInt((form.get('numQuestions') as string) ?? '10') }));
    // Meh, would be cool to move this to a 'route action' but
    // resisting the urge until we know what the action really
    // needs to do.
    naviate('/quiz');
  };

  return (
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
            <FormLabel>Number of questions:</FormLabel>
            <Input name="numQuestions" w={20} type="number" defaultValue={10} />
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
            <SimpleGrid gap="2" columns={2}>
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
            </SimpleGrid>
          </InlineFormControl>

          <InlineFormControl>
            <FormLabel>Person:</FormLabel>
            <HStack spacing="3">
              <Checkbox colorScheme="blue" defaultChecked value="1">
                First
              </Checkbox>
              <Checkbox colorScheme="blue" defaultChecked value="2">
                Second
              </Checkbox>
              <Checkbox colorScheme="blue" defaultChecked value="3">
                Third
              </Checkbox>
            </HStack>
          </InlineFormControl>

          <InlineFormControl>
            <FormLabel>Number:</FormLabel>
            <HStack spacing="3">
              <Checkbox colorScheme="blue" defaultChecked value="singular">
                Singular
              </Checkbox>
              <Checkbox colorScheme="blue" defaultChecked value="plural">
                Plural
              </Checkbox>
            </HStack>
          </InlineFormControl>
        </Flex>

        <Flex alignItems="center" justifyContent="center" mt="6">
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </Container>
  );
}

function InlineFormControl(props: FormControlProps) {
  return <FormControl {...props} display="flex" alignItems="center" />;
}
