import React, { useState } from "react";
import { Counter1 } from "./comp-ts/counter1/Counter1";
import { CounterSett } from "./comp-ts/counterSett/CounterSett";
import "./App.css";
import { Input } from "./comp-ts/input/Input";
import { Button } from "./comp-ts/button/Button";

function App() {

  const [trigger, setTrigger] = useState(false);
  
  const [maxValue, setMaxValue] = useState(5)
  
  const [startValue, setStartValue] = useState(0)

  const inc = () => {
    setStartValue((prevValue:number) => prevValue === maxValue && maxValue !== 0 ? maxValue : prevValue + 1)
  }

  const res = () => {
    setStartValue(0)
    setMaxValue(0)
    localStorage.clear()
  };

  const counterOne = startValue >= maxValue ? "counterOneRed" : "counterOne";
  const redNumber = startValue === maxValue && startValue !== 0 ? "redNumber" : "originalNum"

  const changeMaxValue = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if(value < 0) {
      console.log('max < 0')
    } else {
      setMaxValue(value)
    }
  }

  const changeStartValue = (e:React.ChangeEvent<HTMLInputElement>)  => {
    const value = Number(e.target.value)
    if(value > maxValue) {
      return
    } else
    setStartValue(value)
  }

  const startValueFromLS = () => {
    localStorage.setItem('start value', JSON.stringify(startValue))
    localStorage.setItem('max value', JSON.stringify(maxValue))
  }
  const getStartValueFromLS = () => {
    const value = localStorage.getItem('start value');
    return value ? JSON.parse(value) : 0;
  }

  
  const setFunc = () => {
    setTrigger(false);
    startValueFromLS()
  }

  return trigger ? (
    <CounterSett
      firstChild={
        <>
          <Input text="max value:" value={maxValue.toString()} onChange={changeMaxValue} gapo="8px" redColor={counterOne}/>
          <Input text="start value:" value={startValue.toString()} onChange={changeStartValue} redColor={counterOne}/>
        </>
      }
      doubleChild={
        <Button
          title="set"
          onClick={setFunc}
        />
      }
    />
  ) : (
    <div className="appWrapper">
      <Counter1
        firstChild={<div className={redNumber}>{startValue}</div>}
        doubleChild={
          <>
            <Button title="inc" onClick={inc} isDisabled={startValue === maxValue && startValue !== 0 ? true : false}/>
            <Button title="reset" onClick={res} />
            <Button
              title="set"
              onClick={() => {
                setStartValue(getStartValueFromLS())
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
