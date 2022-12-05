import { useState } from "react";
import { FormData } from "../App";
import SingleAnswerQuestion from "./SingleAnswerQuestion";

export interface SingleAnswerQuestionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  legendContent: string;
  options: string[];
  parameter:
    | "eggs"
    | "meat"
    | "pet"
    | "heat"
    | "cold"
    | "size"
    | "freeRange"
    | "broody"
    | "hybrid"
    | "eggColors";
}
interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

interface Question {
  legendContent: string;
  options: string[];
  parameter:
    | "eggs"
    | "meat"
    | "pet"
    | "heat"
    | "cold"
    | "size"
    | "freeRange"
    | "broody"
    | "hybrid"
    | "eggColors";
}

const Form = ({ formData, setFormData }: Props) => {
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
  ];

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <form>
      <SingleAnswerQuestion
        formData={formData}
        setFormData={setFormData}
        legendContent={questions[currentQuestion].legendContent}
        options={questions[currentQuestion].options}
        parameter={questions[currentQuestion].parameter}
      />
      <button type="button" onClick={handleBack}>
        back
      </button>
      <button type="button" onClick={handleNext}>
        next
      </button>
    </form>
  );
};

export default Form;
