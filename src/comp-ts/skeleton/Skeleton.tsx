import React, { ReactNode } from "react";
import st from "./Skeleton.module.css";


type SkeletonType = {
  firstChild: ReactNode;
  doubleChild: ReactNode;
  needStyle: "count" | "sett";
};

export const Skeleton = (props: SkeletonType) => {

  return (
    <div className={`${st.box} ${st.border}`}>
      <div className={props.needStyle === "count" ? `${st.boxNumber}` : `${st.settBoxNumber}`}>
        {props.firstChild}
      </div>
      <div className={`${st.boxBtn} ${st.border}`}>{props.doubleChild}</div>
    </div>
  );
};


