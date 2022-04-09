import LeftMainEditor from "./EditorMode/LeftMain/LeftMain";
import RightMainEditor from "./EditorMode/RightMain/RightMain";

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
    mode,
    uniqueId,
    onDeleteSkill,
    onDeleteInterest,
    onDeleteWorkExperience,
    onDeleteEducation,
  } = props;
  return mode === "editor" ? (
    <div className="flex gap-5">
      <LeftMainEditor
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
      <RightMainEditor
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
  ) : (
    <div>Hello</div>
  );
};

export default Main;
