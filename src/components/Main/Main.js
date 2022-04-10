import LeftMainEditor from "./EditorMode/LeftMain/LeftMain";
import RightMainEditor from "./EditorMode/RightMain/RightMain";
import LeftMainPreview from "./PreviewMode/LeftMain/LeftMainPreview";
import RightMainPreview from "./PreviewMode/RightMain/RightMainPreview";

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
    aboutMe,
    interests,
    education,
    workExperience,
    personalInfo,
    mode,
    uniqueId,
    onDeleteSkill,
    onDeleteInterest,
    onDeleteWorkExperience,
    onDeleteEducation,
  } = props;
  return (
    <div>
      <div
        className="flex gap-5"
        style={mode === "preview" ? { display: "none" } : {}}
      >
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
      <div
        className="flex gap-5"
        style={mode === "editor" ? { display: "none" } : {}}
      >
        <LeftMainPreview
          personalInfo={personalInfo}
          skills={skills}
          interests={interests}
        />
        <RightMainPreview
          aboutMe={aboutMe}
          workExperience={workExperience}
          education={education}
        />
      </div>
    </div>
  );
};

export default Main;
