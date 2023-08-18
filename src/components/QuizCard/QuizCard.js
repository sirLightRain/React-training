import { Wrapper, Topic, MetaWrapper, Text } from './QuizCard.styles';

export const QuizCard = ({ quiz: { topic, level, questions, time } }) => {
  return (
    <Wrapper level={level}>
      <Topic>{topic}</Topic>
      <MetaWrapper>
        <Text color="red">
          <b>Level:</b> {level}
        </Text>
        <Text color="green">
          <b>Time:</b> {time}
        </Text>
        <Text>
          <b>Questions:</b> {questions}
        </Text>
      </MetaWrapper>
    </Wrapper>
  );
};

//* Маємо props з ггибокою деструктуризацією: ({ quiz: { topic, level, questions, time } })
