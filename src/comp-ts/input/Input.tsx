import React from "react";
import st from "./Input.module.css";

type InputType = {
  text:string;
  value:string;
  onChange:(e:React.ChangeEvent<HTMLInputElement>) => void; 
}

export const Input = (props:InputType) => {
  return(
    <div className={st.cover}>
      <span className={st.span}>{props.text}</span>
      <input type="number" className={st.input} value={props.value} onChange={props.onChange}/>
    </div>
  )
}