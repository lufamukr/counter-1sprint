import React from 'react';

type CounterProps = {
  num: number;
  inc: () => void;
  res: () => void;
}

export function Counter(props: CounterProps) {

  return(
    <div className='box border'>
      <div className='box-number border'>
        {props.num}
      </div>
      <div className='box-btn border'>
        <button className='color border' onClick={props.inc} disabled={props.num === 5 ? true : false}>inc</button>
        <button className='color border' onClick={props.res} disabled={props.num === 0 ? true : false}>reset</button>
      </div>
    </div>
  )
} 