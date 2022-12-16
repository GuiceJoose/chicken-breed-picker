import { useEffect, useState } from "react";
import { FormData } from "../App";
import { MultipleAnswerQuestionProps } from "./Form";

export const eggColorMap = {
  White: "#FFFFFF",
  "Light Brown": "#b5651d",
  "Dark Brown": "#744112",
  Green: "#787D33",
  Blue: "#ADD8E6",
  Pink: "#FFEBEC",
};

const MultipleAnswerQuestion: React.FC<MultipleAnswerQuestionProps> = ({
  formData,
  setFormData,
  legendContent,
  options,
  parameter,
}) => {
  const [allOptionsSelected, setAllOptionsSelected] = useState(false);

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

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const allColors = [...options];
      setFormData({
        ...formData,
        [parameter]: allColors,
      });
    }
    if (!event.target.checked) {
      setFormData({
        ...formData,
        [parameter]: [""],
      });
    }
  };

  return (
    <fieldset className="question-field">
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
              className="checkbox-input"
              style={
                {
                  "--eggCheckboxColor":
                    eggColorMap[option as keyof typeof eggColorMap],
                } as React.CSSProperties
              }
            />

            <label htmlFor={`${parameter}${index}`}>{option}</label>
          </div>
        );
      })}
      <div className="checkbox-option">
        <input
          value={"Any"}
          id={"Any"}
          name={"Any"}
          type="checkbox"
          checked={options.every((color) => {
            return formData[parameter].includes(color);
          })}
          onChange={handleSelectAll}
          className="checkbox-input"
          style={
            {
              "--eggCheckboxColor":
                "linear-gradient(#FFFFFF, #FFEBEC, #ADD8E6, #787D33, #b5651d, #744112)",
            } as React.CSSProperties
          }
        />

        <label htmlFor="Any">Any</label>
      </div>
    </fieldset>
  );
};

export default MultipleAnswerQuestion;
