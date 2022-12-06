import { FormData } from "../App";

interface Props {
  formData: FormData;
}

const ResultsPage = ({ formData }: Props) => {
  return (
    <ul>
      {Object.keys(formData).map((key) => {
        return (
          <li>
            {`${key}: `}
            {formData[key as keyof FormData]}
          </li>
        );
      })}
    </ul>
  );
};

export default ResultsPage;
