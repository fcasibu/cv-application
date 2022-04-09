import { Component } from "react";
import LeftMain from "./EditorMode/LeftMain/LeftMain";

const Main = (props) => {
  const {
    onChangePersonalInfo,
    onChangeSkill,
    onChangeInterest,
    onAddSkill,
    onAddInterest,
    skills,
    interests,
    interestsId,
    skillsId,
    onDeleteSkill,
    onDeleteInterest,
  } = props;
  return (
    <div className="flex">
      <LeftMain
        onChangePersonalInfo={onChangePersonalInfo}
        onChangeSkill={onChangeSkill}
        onChangeInterest={onChangeInterest}
        onAddSkill={onAddSkill}
        onAddInterest={onAddInterest}
        skills={skills}
        interests={interests}
        skillsId={skillsId}
        interestsId={interestsId}
        onDeleteSkill={onDeleteSkill}
        onDeleteInterest={onDeleteInterest}
      />
      <div></div>
    </div>
  );
};

export default Main;
