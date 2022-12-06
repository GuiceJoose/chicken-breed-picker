interface Props {
  numOfQuestions: number;
  currentQuestion: number;
}

const ProgressBar = ({ numOfQuestions, currentQuestion }: Props) => {
  return (
    <>
      <h4>
        Question {currentQuestion + 1} of {numOfQuestions}
      </h4>
      <ul className="progress-bar">
        {[...Array(numOfQuestions)].map((e, index) => {
          return (
            <li
              className={
                index <= currentQuestion
                  ? "progress-filled"
                  : "progress-unfilled"
              }
            ></li>
          );
        })}
      </ul>
    </>
  );
};

export default ProgressBar;
