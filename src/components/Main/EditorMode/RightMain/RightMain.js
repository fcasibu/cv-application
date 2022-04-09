import About from "./About/About";
import Education from "./Education/Education";
import WorkExperience from "./WorkExperience/WorkExperience";

const RightMain = (props) => {
  const {
    onChangeAboutMe,
    onChangeWorkExperience,
    onChangeEducation,
    workExperience,
    education,
    uniqueId,
    onDeleteWorkExperience,
    onDeleteEducation,
  } = props;
  return (
    <div className="flex flex-col flex-1 gap-5">
      <About onChangeAboutMe={onChangeAboutMe} />
      <WorkExperience
        onChangeWorkExperience={onChangeWorkExperience}
        workExperience={workExperience}
        uniqueId={uniqueId}
        onDeleteWorkExperience={onDeleteWorkExperience}
      />
      <Education
        onChangeEducation={onChangeEducation}
        education={education}
        uniqueId={uniqueId}
        onDeleteEducation={onDeleteEducation}
      />
    </div>
  );
};

export default RightMain;
