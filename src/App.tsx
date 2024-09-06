import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef<HTMLInputElement>(null);

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
      <input type="text" className="form-control" />
    </>
  );
}

export default App;
