import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { Counter1 } from "./comp-ts/counter1/Counter1";
import { CounterSett } from "./comp-ts/counterSett/CounterSett";
import "./App.css";
import { Input } from "./comp-ts/input/Input";
import { Button } from "./comp-ts/button/Button";
import { number } from "prop-types";

function App() {
  const [trigger, setTrigger] = useState(false);
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

  const counterOne = counter1 === 5 ? "counterOneRed" : "counterOne";

  const [maxValue, setMaxValue] = useState(0)
  const [startValue, setStartValue] = useState(0)

  const changeMaxValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    setMaxValue(value)
  }

  const changeStartValue = () => {

  }

  return trigger ? (
    <CounterSett
      firstChild={
        <>
          <Input text="max value:" value={maxValue.toString()} onChange={changeMaxValue}/>
          <Input text="start value:" value={startValue.toString()} onChange={changeStartValue}/>
        </>
      }
      doubleChild={
        <Button
          title="set"
          onClick={() => {
            setTrigger(false);
          }}
        />
      }
    />
  ) : (
    <div className="appWrapper">
      <Counter1
        firstChild={<div className={counterOne}>{counter1}</div>}
        doubleChild={
          <>
            <Button title="inc" onClick={inc} />
            <Button title="reset" onClick={res} />
            <Button
              title="set"
              onClick={() => {
                setTrigger(true);
              }}
            />
          </>
        }
      />
    </div>
  );
}

export default App;
