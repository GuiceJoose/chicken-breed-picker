import { useState } from "react";
import { FormData } from "../App";

interface Props {
  onClick: () => void;
  didUserAnswer: boolean;
}

const NextButton = ({ onClick, didUserAnswer }: Props) => {
  return (
    <button type="button" onClick={didUserAnswer ? onClick : undefined}>
      next
    </button>
  );
};

export default NextButton;
