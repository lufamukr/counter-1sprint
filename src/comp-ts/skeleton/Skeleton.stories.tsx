import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Skeleton } from "./Skeleton";
import st from "./Skeleton.module.css";

import { Button } from "../button/Button";
import { Counter1Type } from "../counter1/Counter1";

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
};

export default meta;
// type Story = StoryObj<typeof Skeleton>;

// export const DefaultSkeleton:Story = {
//     args: {
//     firstChild: true,
//     doubleChild: "ff"
//     },
//   }

export const SkeletonDef = () => {
  return(
    <Skeleton firstChild={<div>1</div>} doubleChild={<div style={{"color": "white"}}>2</div>} needStyle="count"/>
  )
}







