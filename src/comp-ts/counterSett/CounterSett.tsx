import React, { ReactNode } from "react";
import { Skeleton } from "../skeleton/Skeleton";

type CounterSettType = {
  firstChild: ReactNode;
  doubleChild: ReactNode;
}

export const CounterSett = (props:CounterSettType) => {
  return(
    <Skeleton firstChild={props.firstChild} doubleChild={props.doubleChild} needStyle="sett"/>
  )
}