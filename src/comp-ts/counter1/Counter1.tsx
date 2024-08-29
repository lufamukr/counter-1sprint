import React, { ReactNode } from "react";
import { Skeleton } from "../skeleton/Skeleton";
import { Button } from "../button/Button";
import st from "./Counter1.module.css"

export type Counter1Type = {
  num?: number;
  firstChild: ReactNode;
  doubleChild: ReactNode; 
}

export const Counter1 = (props:Counter1Type) => {

  const changeClassBoxNumber = props.num === 5 ? `${st.boxNumber} ${st.border} ${st.color_for_max}` : `${st.boxNumber} ${st.border}`;

  return(
    <Skeleton firstChild={props.firstChild} doubleChild={props.doubleChild} needStyle="count"/>

  )
}