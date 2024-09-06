import { useEffect, useRef, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

function App() {
  useEffect(() => {
    connect();
    return () => disconnect();
  });

  return <></>;
}

export default App;
