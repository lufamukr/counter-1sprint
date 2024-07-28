import React from "react";
import { Skeleton } from "../skeleton/Skeleton";
import { Button } from "../button/Button";
import st from "./Counter1.module.css"

type Counter1Type = {
  num:number;
  inc: () => void;
  res: () => void;
}

export const Counter1 = (props:Counter1Type) => {

  const changeClassBoxNumber = props.num === 5 ? `${st.boxNumber} ${st.border} ${st.color_for_max}` : `${st.boxNumber} ${st.border}`;

  return(
    <Skeleton num={props.num} classTitle={changeClassBoxNumber}>
        <Button title="inc" onClick={props.inc} />
        <Button title="res" onClick={props.res}/>
    </Skeleton>
  )
}