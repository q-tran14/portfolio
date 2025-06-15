import { SkillCloud } from "../components/Skills/SkillCloud";

export const Skills = () => {
  return (
    <div className="min-h-fit mt-[10vh] bg-black/25 backdrop-blur-sm text-white flex mx-[20vw] items-center rounded-3xl">
      <SkillCloud />
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold text-center mb-4">My Skills</h2>
        <p className="text-1xl text-left leading-relaxed p-6">
          Over the years, I have developed a solid set of technical and soft skills
          through real-world projects, teamwork, and independent learning. From game engines
          like Unity and multiplayer frameworks like FishNet, to programming languages such as
          C#, JavaScript, and Python, each skill reflects my passion for building creative and
          scalable solutions.
        </p>
        {/*Skill Description
        <h2 className="text-4xl font-bold text-center mb-4 mt-4">Skill Name</h2>
        <p className="text-1xl text-left leading-relaxed p-6">
          Over the years, I have developed a solid set of technical and soft skills
          through real-world projects, teamwork, and independent learning. From game engines
          like Unity and multiplayer frameworks like FishNet, to programming languages such as
          C#, JavaScript, and Python, each skill reflects my passion for building creative and
          scalable solutions.
        </p>*/}
      </div>
    </div>
  );
};
