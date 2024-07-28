import React from "react";
import st from "./Input.module.css";

type InputType = {
  text:string;
}

export const Input = (props:InputType) => {
  return(
    <div className={st.cover}>
      <span className={st.span}>{props.text}</span>
      <input type="number" className={st.input}/>
    </div>
  )
}