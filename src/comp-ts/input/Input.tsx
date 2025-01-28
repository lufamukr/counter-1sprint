import React from "react";
import st from "./Input.module.css";

type InputType = {
  text:string;
  value:string;
  onChange:(e:React.ChangeEvent<HTMLInputElement>) => void; 
  gapo?: string;
  redColor: string;
}

export const Input = (props:InputType) => {

  return(
    <div className={st.cover} style={{gap:`${props.gapo}`}}>
      <span className={st.span}>{props.text}</span>
      <input type="number" className={st.input + ' ' + st[`${props.redColor}`]} onChange={props.onChange} value={props.value} />
    </div>
  )
}