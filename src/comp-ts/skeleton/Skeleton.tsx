import React, { ReactNode } from "react";
import st from "./Skeleton.module.css";
import { Input } from "../input/Input";

type SkeletonType = {
  firstChild: ReactNode;
  doubleChild: ReactNode;
};

export const Skeleton = (props: SkeletonType) => {

  return (
    <div className={`${st.box} ${st.border}`}>
      <div className={`${st.boxNumber}`}>
        {props.firstChild}
      </div>
      <div className={`${st.boxBtn} ${st.border}`}>{props.doubleChild}</div>
    </div>
  );
};


