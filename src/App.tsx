import React, { useState } from "react";
import { Counter1 } from "./comp-ts/counter1/Counter1";
import { CounterSett } from "./comp-ts/counterSett/CounterSett";
import "./App.css";
import { Input } from "./comp-ts/input/Input";
import { Button } from "./comp-ts/button/Button";

function App() {
  //Counter1 - start
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
  //Counter1 - end

  //CounterSetting - start

  //CounterSetting - end

  return (
    <div className="appWrapper">
      <CounterSett
        firstChild={
          <>
            <Input text="max value:" />
            <Input text="start value:" />
          </>
        }
        doubleChild={<Button title="set" onClick={() => {}} />}
      />
      <Counter1
        firstChild={<div>1</div>}
        doubleChild={
          <>
            <Button title="inc" onClick={() => {}} />
            <Button title="reset" onClick={() => {}} />
          </>
        }
      />
    </div>
  );
}

export default App;
