import React, { ReactNode } from "react";
import { Skeleton } from "../skeleton/Skeleton";

export type Counter1Type = {
  num?: number;
  firstChild: ReactNode;
  doubleChild: ReactNode; 
}

export const Counter1 = (props:Counter1Type) => {

  return(
    <Skeleton firstChild={props.firstChild} doubleChild={props.doubleChild} needStyle="count"/>
  )
}