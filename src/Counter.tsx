import React from 'react';

type CounterProps = {
  num: number;
  inc: () => void;
  res: () => void;
}

export function Counter({num, inc, res}: CounterProps) {

  const disabledForFive = () => { return num === 5 }
  const disabledForZero = () => { return num === 0 }
  const changeClassBoxNumber = () => {
    return num === 5 ? 'box-number border color_for_max' : 'box-number border'
  }

  return(
    <div className='box border'>
      <div className= {changeClassBoxNumber()}>
        {num}
      </div>
      <div className='box-btn border'>
        <button className='border' onClick={inc} disabled={disabledForFive()}>inc</button>
        <button className='border' onClick={res} disabled={disabledForZero()}>reset</button>
      </div>
    </div>
  )
} 