import React from "react";
import st from "./Button.module.css";

type ButtonType = {
  title: string;
  onClick: () => void;
  isDisabled?: boolean;
}

export const Button = (props:ButtonType) => {
  return(
    <button className={`${st.button} ${st.border}`} onClick={props.onClick} disabled={props.isDisabled}>{props.title}</button>
  )
}