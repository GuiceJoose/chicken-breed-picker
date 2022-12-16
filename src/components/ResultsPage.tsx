import { FormData } from "../App";
import { selectChickens } from "../selectChickens";
import { ChickenJSON } from "../selectChickens";
import { useEffect, useState } from "react";
import ChickenCard from "./ChickenCard";

interface Props {
  formData: FormData;
}

const ResultsPage = ({ formData }: Props) => {
  const [chickens, setChickens] = useState([]);

  const handleReload = () => {
    window.location.reload();
  };

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
        return <ChickenCard chickenInfo={chicken} />;
      })}
      <button onClick={handleReload}>Start Over</button>
    </div>
  );
};

export default ResultsPage;
