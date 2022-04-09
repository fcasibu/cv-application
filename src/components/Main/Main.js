import LeftMain from "./EditorMode/LeftMain/LeftMain";
import RightMain from "./EditorMode/RightMain/RightMain";

const Main = (props) => {
  const {
    onChangePersonalInfo,
    onChangeWorkExperience,
    onChangeEducation,
    onChangeSkill,
    onChangeInterest,
    onChangeAboutMe,
    onAddSkill,
    onAddInterest,
    skills,
    interests,
    education,
    workExperience,
    uniqueId,
    onDeleteSkill,
    onDeleteInterest,
    onDeleteWorkExperience,
    onDeleteEducation,
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
        onChangeEducation={onChangeEducation}
        workExperience={workExperience}
        education={education}
        uniqueId={uniqueId}
        onDeleteWorkExperience={onDeleteWorkExperience}
        onDeleteEducation={onDeleteEducation}
      />
    </div>
  );
};

export default Main;
