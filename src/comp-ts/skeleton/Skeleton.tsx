import React, { ReactNode } from "react";
import st from "./Skeleton.module.css";

type SkeletonType = {
  num: number;
  classTitle?: string;
  children?: ReactNode;
};

export const Skeleton = (props: SkeletonType) => {


  return (
    <div className={`${st.box} ${st.border}`}>
      <div className={`${st.boxNumber} ${props.classTitle}`}>{props.num}</div>
      <div className={`${st.boxBtn} ${st.border}`}>{props.children}</div>
    </div>
  );
};
