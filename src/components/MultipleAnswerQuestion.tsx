import { FormData } from "../App";
import { MultipleAnswerQuestionProps } from "./Form";

const MultipleAnswerQuestion: React.FC<MultipleAnswerQuestionProps> = ({
  formData,
  setFormData,
  legendContent,
  options,
  parameter,
}) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setFormData({
        ...formData,
        [parameter]: [...formData[parameter], event.target.value],
      });
    } else {
      setFormData({
        ...formData,
        [parameter]: [
          ...formData[parameter].filter(
            (option) => option !== event.target.value
          ),
        ],
      });
    }
  };

  return (
    <fieldset>
      <legend>{legendContent}</legend>
      {options.map((option, index) => {
        return (
          <div className="checkbox-option">
            <input
              value={option}
              id={`${parameter}${index}`}
              name={parameter}
              type="checkbox"
              checked={formData[parameter].includes(option)}
              onChange={onChange}
            />
            <label htmlFor={`${parameter}${index}`}>{option}</label>
          </div>
        );
      })}
    </fieldset>
  );
};

export default MultipleAnswerQuestion;
