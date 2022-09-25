import "./styles.css";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const inputBox = (value) => {
    setName((_name) => value);
  };

  return (
    <div className="App">
      <input onChange={(event) => inputBox(event.target.value)} />
      <p>{name}</p>
    </div>
  );
}
