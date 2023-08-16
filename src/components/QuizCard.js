export const QuizCard = ({ quiz: { topic, level, questions, time } }) => {
  return (
    <div>
      <h2>{topic}</h2>
      <div>
        <p>Level: {level}</p>
        <p>Time: {time}</p>
        <p>Questions: {questions}</p>
      </div>
    </div>
  );
};
