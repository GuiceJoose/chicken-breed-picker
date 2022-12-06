import { useState } from "react";
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

  const questions: Question[] = [
    {
      parameter: "eggs",
      legendContent: "How many eggs ya want",
      options: ["like none", "some", "decent amount", "tons"],
    },
    {
      parameter: "meat",
      legendContent: "How much meat ya want",
      options: ["like none", "decent amount", "tons"],
    },
    {
      parameter: "pet",
      legendContent: "how good of a pet?",
      options: ["meh", "decently nice", "cuddly"],
    },
    {
      parameter: "size",
      legendContent: "How big da chicken",
      options: ["little", "medium", "big"],
    },
    {
      parameter: "heat",
      legendContent: "how much heat tolerance?",
      options: ["some", "decent amount", "tons"],
    },
    {
      parameter: "cold",
      legendContent: "how much cold tolerance?",
      options: ["some", "decent amount", "tons"],
    },
    {
      parameter: "freeRange",
      legendContent: "want the chicken to free range?",
      options: ["yes, no"],
    },
    {
      parameter: "broody",
      legendContent: "want the chicken to raise its chrilren?",
      options: ["yes, no"],
    },
    {
      parameter: "hybrid",
      legendContent: "are hybrids ok?",
      options: ["yes, no"],
    },
    {
      parameter: "eggColors",
      legendContent: "what color eggs?",
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
          onClick={
            currentQuestion === questions.length - 1 ? handleSubmit : handleNext
          }
        />
      </form>
    </>
  );
};

export default Form;
