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
             We Partner

            <br />
            in your Success          </>
        }
        image="/arata.gif"
        text="Our Services"
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Consultations",
            text: " Unlock Your Web3 Potential - Gain expert insights and strategic guidance tailored to your project's needs for a successful journey into the decentralized world.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Strategizing",
            text: "Pave Your Path to Success - Collaborate with our seasoned strategists to devise innovative plans, seize opportunities, and outmanoeuvre competitors in the ever-evolving Web3 landscape.",
          },
          {
            icon: WorkflowsIcon,
            title: "Design",
            text: "Transform Ideas into Captivating Experiences - From stunning UI/UX designs to mesmerizing NFTs, our creative team crafts immersive digital experiences that leave a lasting impression.  ",
          },
          {
            icon: CustomViewsIcon,
            title: "Development",
            text: "Build the Future of Web3 - From cutting-edge apps to smart contracts and dApps, our experienced developers bring your vision to life, leveraging the power of both web2 & web3 technologies.",
          },
          {
            icon: DiscussionIcon,
            title: "Risk Assessment.",
            text: "Navigate Safely in the Decentralized universe - Mitigate risks with our thorough analysis and proactive strategies, ensuring a secure and resilient foundation for your Web3 venture.",
          },
          {
            icon: IssuesIcon,
            title: "Brainstorming",
            text: "Ignite Ideas, Unleash Innovation - Unleash the collective genius of our experts as we brainstorm and collaborate with you to refine concepts, explore possibilities, and spark groundbreaking solutions.",
          },
        ]}
      />
      <Features.Cards
        features={[
          {
            image: "/card-board.png",
            imageClassName: "top-[55%] md:top-[40%] md:left-[12px] w-[200%]",
            title: "List and board",
            text: "10,000 Anime PFP NFTs with  Lore, Art & Smart Contract on Binance’s BEP20 Network!",
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
