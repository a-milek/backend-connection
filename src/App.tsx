import { useEffect, useRef, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  const [category, setCategory] = useState("");

  //afterEachRender
  useEffect(() => {
    //is changing something outside of a component
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <>
      <select
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </>
  );
}

export default App;
