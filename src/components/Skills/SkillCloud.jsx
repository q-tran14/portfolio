import React from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import skills from "../../data/skills.json";
import "./index.css"
export const SkillCloud = () => {
  return (
    <TagCloud
      options={(w) => ({
        radius: Math.min(600, w.innerWidth, w.innerHeight) / 2,
        maxSpeed: "slow",
        keep: true,
        shuffle: true
      })}
      // onClick={(tag, ev) => ())}
      onClickOptions={{ passive: true }}
      className="text-white font-extrabold text-xl"
    >
      {skills}
    </TagCloud>
  );
};
