import { FormData } from "../App";
import { selectChickens } from "../selectChickens";
import { ChickenJSON } from "../selectChickens";
import { useEffect, useState } from "react";

interface Props {
  formData: FormData;
}

const ResultsPage = ({ formData }: Props) => {
  const [chickens, setChickens] = useState([]);

  useEffect(() => {
    fetch("dummyData.json")
      .then((res) => res.json())
      .then((data) => {
        setChickens(data);
      });
  }, []);

  return (
    <div>
      <h2>{selectChickens(formData, chickens).length}</h2>
      {selectChickens(formData, chickens).map((chicken) => {
        return (
          <div>
            <h2>{`${chicken.Breed}: `}</h2>
            {Object.keys(chicken).map((key) => {
              return (
                <ul>
                  <li>
                    {`${key}: `}
                    {chicken[key as keyof ChickenJSON]}
                  </li>
                </ul>
              );
            })}
          </div>
        );
      })}
      <button>Start Over</button>
    </div>
  );
};

export default ResultsPage;
