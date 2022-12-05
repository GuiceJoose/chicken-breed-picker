import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

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
  eggColors: number;
}

function App() {
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
    eggColors: 0,
  });

  return (
    <div className="App">
      <div>{formData.eggs}</div>
      <Form formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default App;
