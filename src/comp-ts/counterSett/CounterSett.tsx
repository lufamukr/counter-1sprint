import React, { ReactNode } from "react";
import { Skeleton } from "../skeleton/Skeleton";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

type CounterSettType = {
  num:number;
  children?: ReactNode;
}

export const CounterSett = (props:CounterSettType) => {
  return(
    <Skeleton num={props.num}>
      <Input text="s"/>
      <Button title="set" onClick={() => {}}/>
    </Skeleton>
  )
}