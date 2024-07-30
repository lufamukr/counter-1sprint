import React, { ReactNode } from "react";
import { Skeleton } from "../skeleton/Skeleton";
import st from "./CounterSett.module.css";
import { Button } from "../button/Button";
import { Input } from "../input/Input";

type CounterSettType = {

}

export const CounterSett = (props:CounterSettType) => {
  return(
    <Skeleton firstChild={<div>1</div>} doubleChild={<div>2</div>}>
    </Skeleton>
  )
}