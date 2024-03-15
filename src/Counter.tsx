import React from 'react';

type CounterProps = {
  num: number;
  inc: () => void;
  res: () => void;
}

export function Counter(props: CounterProps) {

  const disabledForFive = () => { return props.num === 5 }
  const disabledForZero = () => { return props.num === 0 }
  const changeClassBoxNumber = () => {
    return props.num === 5 ? 'box-number border color_for_max' : 'box-number border'
  }

  return(
    <div className='box border'>
      <div className= {changeClassBoxNumber()}>
        {props.num}
      </div>
      <div className='box-btn border'>
        <button className='border' onClick={props.inc} disabled={disabledForFive()}>inc</button>
        <button className='border' onClick={props.res} disabled={disabledForZero()}>reset</button>
      </div>
    </div>
  )
} 