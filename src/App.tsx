import React, { useState } from "react";
import { Counter1 } from "./comp-ts/counter1/Counter1";

function App() {
  let [counter1, setCounter1] = useState(0);
  const inc = () => {
    setCounter1((prevCount) => prevCount + 1);
    if (counter1 === 5) {
      setCounter1(5);
    }
  };

  const res = () => {
    setCounter1(0);
  };

  return (
    <div className="App">
      <Counter1 num={counter1} inc={inc} res={res} />
    </div>
  );
}

export default App;
