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
    eggs: -1,
    meat: -1,
    pet: -1,
    cold: -1,
    heat: -1,
    size: -1,
    freeRange: -1,
    broody: -1,
    hybrid: -1,
    eggColors: [""],
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
