import React, { ReactNode } from "react";
import { Skeleton } from "../skeleton/Skeleton";
import st from "./CounterSett.module.css";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

type CounterSettType = {
  firstChild: ReactNode;
  doubleChild: ReactNode;
}

export const CounterSett = (props:CounterSettType) => {
  return(
    <Skeleton firstChild={props.firstChild} doubleChild={props.doubleChild}/>
  )
}