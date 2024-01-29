import React, { useState } from 'react';
import './App.css';
import { Counter } from './Counter';

function App() {

  let [count, setCount] = useState(0)
  const inc = () => {
    if(count === 5) {
      setCount(5)
    }
    setCount(prevCount => prevCount + 1)
  }

  const res = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <Counter num = {count} inc = {inc} res = {res}/>
    </div>
  );
}

export default App;
