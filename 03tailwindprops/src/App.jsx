import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "../components/Card";

function App() {
  const [count, setCount] = useState(0);
  let obj = {
    name: "bhaven",
    age: 21,
  };

  let myArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-teal-400 p-5 rounded-xl mb-5">Tailwind Test</h1>
      <Card username="Blablabla" btnText = "Tap here" myObj={myArr} />
      <Card username="xyzxyz" btnText = "Click here"   myObj={myArr} />
    </>
  );
}

export default App;
