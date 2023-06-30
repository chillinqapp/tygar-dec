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

export const EnjoyIssueTracking = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            Issue tracking
            <br />
            you'll enjoy using
          </>
        }
        image="/arata.gif"
        text="Our Services"
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Consultations",
            text: " Our team of experts is here to guide you through the intricacies of the Web3 landscape.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Strategizing",
            text: " We help you devise effective plans, identify opportunities, and mitigate risks, giving your venture a competitive edge.",
          },
          {
            icon: WorkflowsIcon,
            title: "Design",
            text: "We blend artistry and functionality to bring your vision to life.            ",
          },
          {
            icon: CustomViewsIcon,
            title: "Development",
            text: "Whether you need a mobile app, dApp, smart contracts, websites, or custom solutions, our experienced developers deliver robust and scalable solutions using the latest technologies. ",
          },
          {
            icon: DiscussionIcon,
            title: "Discussion.",
            text: "Collaborate on issues without losing context.",
          },
          {
            icon: IssuesIcon,
            title: "Issue templates.",
            text: "Guide your team to write effective issues.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "/card-board.png",
            imageClassName: "top-[55%] md:top-[40%] md:left-[12px] w-[200%]",
            title: "List and board",
            text: "Switch between list and board layout to view work from any angle.",
          },
          {
            image: "/card_views.png",
            imageClassName:
              "top-[75%] left-[12px] md:top-[40%] md:left-[24px] w-[110%]",
            title: "Make it yours",
            text: "Quickly apply filters and operators to refine your issue lists and create custom views.",
          },
        ]}
      />
    </Features>
  );
};
