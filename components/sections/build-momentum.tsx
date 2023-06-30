"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const BuildMomentum = () => {
  return (
    <Features color="40,87,255" colorDark="48,58,117">
      <Features.Main
        title={
          <>
             Building Projects 

            <br />
            for a Better Tomorrow          </>
        }
        image="/potion.gif"
        imageSize="large"
        text=" Shaping Teams, Products & Processes for the Future of Entrepreneurs"
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Equity",
            text: " Collaborate with us through equity partnerships instead of bearing all expenses in direct payments.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Token",
            text: "Leverage the potential of tokenization by exploring token-based collaboration models.            ",
          },
          {
            icon: WorkflowsIcon,
            title: "Retainer",
            text: "For ongoing support and advisory services, opt for our retainer model, ensuring a dedicated partnership for continuous growth.",
          },
          {
            icon: CustomViewsIcon,
            title: "Lump-sum",
            text: "One-time payments for businesses that need solutions in short bursts.",
          },
          {
            icon: DiscussionIcon,
            title: "Scope creep.",
            text: "Understand which issues are added mid-cycle.",
          },
          {
            icon: IssuesIcon,
            title: "Be prepared.",
            text: "Schedule work in advance with upcoming cycles.",
          },
        ]}
      />
    </Features>
  );
};
