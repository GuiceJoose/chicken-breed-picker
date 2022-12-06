import { useEffect, useState } from "react";
import { FormData } from "../App";
import SingleAnswerQuestion from "./SingleAnswerQuestion";
import MultipleAnswerQuestion from "./MultipleAnswerQuestion";
import NextButton from "./NextButton";
import ProgressBar from "./ProgressBar";

export interface SingleAnswerQuestionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  legendContent: string;
  options: string[];
  parameter: string;
}
export interface MultipleAnswerQuestionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  legendContent: string;
  options: string[];
  parameter: "eggColors";
}
interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Question {
  legendContent: string;
  options: string[];
  parameter: string;
  // | "eggs"
  // | "meat"
  // | "pet"
  // | "heat"
  // | "cold"
  // | "size"
  // | "freeRange"
  // | "broody"
  // | "hybrid"
  // | "eggColors";
}

const Form = ({ formData, setFormData, setIsFormSubmitted }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [didUserAnswer, setDidUserAnswer] = useState(false);

  useEffect(() => {
    // Checks whether question has single answer option or multiple answer options,
    // then checks if the user selected an answer

    if (
      typeof formData[
        questions[currentQuestion].parameter as keyof FormData
      ] === "number"
    ) {
      if (
        formData[questions[currentQuestion].parameter as keyof FormData] > -1
      ) {
        setDidUserAnswer(true);
      } else setDidUserAnswer(false);
    }
    if (
      typeof formData[
        questions[currentQuestion].parameter as keyof FormData
      ] === "object"
    ) {
      if (
        formData[questions[currentQuestion].parameter as keyof FormData]
          .length > 1
      ) {
        setDidUserAnswer(true);
      } else setDidUserAnswer(false);
    }
  }, [currentQuestion, formData]);

  const questions: Question[] = [
    {
      parameter: "eggs",
      legendContent: "How important is egg laying ability?",
      options: [
        "I don't really care to eat eggs",
        "At lest some eggs would be nice",
        "I want a good number of eggs",
        "They better lay a lot of eggs or they're out of here!",
      ],
    },
    {
      parameter: "meat",
      legendContent: "How important is meat production?",
      options: [
        "I wouldn't eat my chickens!",
        "I'd like to eat some chicken occasionally",
        "That's what they're for!",
      ],
    },
    {
      parameter: "pet",
      legendContent: "How important is your chicken's personality?",
      options: [
        "Don't care, they're livestock",
        "It would be nice if they were somewhat friendly",
        "I want a cuddly pet!",
      ],
    },
    {
      parameter: "size",
      legendContent: "Is the size of your chicken important?",
      options: [
        "Size doesn't matter",
        "I want small birds",
        "Medium is just right",
        "The bigger the better!",
      ],
    },
    {
      parameter: "heat",
      legendContent: "How hot is your climate?",
      options: [
        "It's warm in the summer, but not bad",
        "It gets pretty hot",
        "I would die without air conditioning",
      ],
    },
    {
      parameter: "cold",
      legendContent: "How cold are your winters?",
      options: [
        "I get the gloves and hats out above freezing",
        "It snows sometimes",
        "I snowmobile to work",
      ],
    },
    {
      parameter: "freeRange",
      legendContent:
        "Do you want your chickens to free range and forage for their food?",
      options: [
        "No, I'll keep them in their own run",
        "Yeah, find your own food ya freeloader!",
      ],
    },
    {
      parameter: "broody",
      legendContent:
        "Do you want your chickens to hatch their own eggs and raise their babies?",
      options: [
        "Yes, I want broody chickens!",
        "No, get back to laying eggs already!",
      ],
    },
    {
      parameter: "hybrid",
      legendContent: "Are you ok with hybrid chickens?",
      options: ["No", "Yes"],
    },
    {
      parameter: "eggColors",
      legendContent: "What color eggs do you want your chickens to lay?",
      options: ["white", "light brown", "dark brown", "green", "blue"],
    },
  ];

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setIsFormSubmitted(true);
  };

  return (
    <>
      <ProgressBar
        numOfQuestions={questions.length}
        currentQuestion={currentQuestion}
      />
      <form>
        {typeof formData[
          questions[currentQuestion].parameter as keyof FormData
        ] === "object" ? (
          <MultipleAnswerQuestion
            formData={formData}
            setFormData={setFormData}
            legendContent={questions[currentQuestion].legendContent}
            options={questions[currentQuestion].options}
            parameter={questions[currentQuestion].parameter}
          />
        ) : (
          <SingleAnswerQuestion
            formData={formData}
            setFormData={setFormData}
            legendContent={questions[currentQuestion].legendContent}
            options={questions[currentQuestion].options}
            parameter={questions[currentQuestion].parameter}
          />
        )}
        <button type="button" onClick={handleBack}>
          back
        </button>
        <NextButton
          didUserAnswer={didUserAnswer}
          onClick={
            currentQuestion === questions.length - 1 ? handleSubmit : handleNext
          }
        />
      </form>
    </>
  );
};

export default Form;
