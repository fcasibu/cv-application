import { Component } from "react";
import LeftMain from "./EditorMode/LeftMain/LeftMain";
import RightMain from "./EditorMode/RightMain/RightMain";

const Main = (props) => {
  const {
    onChangePersonalInfo,
    onChangeWorkExperience,
    onChangeSkill,
    onChangeInterest,
    onChangeAboutMe,
    onAddSkill,
    onAddInterest,
    skills,
    interests,
    workExperience,
    uniqueId,
    onDeleteSkill,
    onDeleteInterest,
    onDeleteWorkExperience,
  } = props;
  return (
    <div className="flex gap-5">
      <LeftMain
        onChangePersonalInfo={onChangePersonalInfo}
        onChangeSkill={onChangeSkill}
        onChangeInterest={onChangeInterest}
        onAddSkill={onAddSkill}
        onAddInterest={onAddInterest}
        skills={skills}
        interests={interests}
        uniqueId={uniqueId}
        onDeleteSkill={onDeleteSkill}
        onDeleteInterest={onDeleteInterest}
      />
      <RightMain
        onChangeAboutMe={onChangeAboutMe}
        onChangeWorkExperience={onChangeWorkExperience}
        workExperience={workExperience}
        uniqueId={uniqueId}
        onDeleteWorkExperience={onDeleteWorkExperience}
      />
      <div></div>
    </div>
  );
};

export default Main;
