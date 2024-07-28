import React from "react";
import st from "./Button.module.css";

type ButtonType = {
  title: string;
  onClick: () => void;
}

export const Button = (props:ButtonType) => {
  return(
    <button className={`${st.button} ${st.border}`} onClick={props.onClick}>{props.title}</button>
  )
}