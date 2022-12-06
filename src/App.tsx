import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ResultsPage from "./components/ResultsPage";

export interface FormData {
  eggs: number;
  meat: number;
  pet: number;
  cold: number;
  heat: number;
  size: number;
  freeRange: number;
  broody: number;
  hybrid: number;
  eggColors: string[];
}

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    eggs: 3,
    meat: 2,
    pet: 1,
    cold: 2,
    heat: 2,
    size: 2,
    freeRange: 1,
    broody: 0,
    hybrid: 0,
    eggColors: ["white"],
  });

  return (
    <div className="App">
      {isFormSubmitted ? (
        <ResultsPage formData={formData} />
      ) : (
        <Form
          formData={formData}
          setFormData={setFormData}
          setIsFormSubmitted={setIsFormSubmitted}
        />
      )}
    </div>
  );
}

export default App;
