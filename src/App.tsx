import React, { useState } from "react";
import { Counter1 } from "./comp-ts/counter1/Counter1";
import { CounterSett } from "./comp-ts/counterSett/CounterSett";

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
    <div className="App">
      <Counter1 firstChild={<div>1</div>} doubleChild={<div>2</div>}/>
      <CounterSett firstChild={<div>1</div>} doubleChild={<div>2</div>}/>
    </div>
  );
}

export default App;
