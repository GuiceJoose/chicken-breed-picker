import { FormData } from "../App";
import { SingleAnswerQuestionProps } from "./Form";

const SingleAnswerQuestion: React.FC<SingleAnswerQuestionProps> = ({
  formData,
  setFormData,
  legendContent,
  options,
  parameter,
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [parameter]: Number(event.target.value) });
  };

  return (
    <fieldset className="question-field">
      <legend>{legendContent}</legend>
      {options.map((option, index) => {
        return (
          <div className="radio-option">
            <input
              value={index}
              id={`${parameter}${index}`}
              name={parameter}
              type="radio"
              checked={formData[parameter as keyof FormData] === index}
              onChange={onChange}
              className="radio-input"
            />
            <label className="radio-label" htmlFor={`${parameter}${index}`}>
              {option}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
};

export default SingleAnswerQuestion;
