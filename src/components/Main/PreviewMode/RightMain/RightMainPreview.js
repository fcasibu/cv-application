import About from "./About/About";
import Education from "./Education/Education";
import WorkExperience from "./WorkExperience/WorkExperience";

const RightMainPreview = (props) => {
  const { aboutMe, workExperience, education } = props;
  return (
    <div className="flex flex-col flex-1 gap-5">
      <About aboutMe={aboutMe} />
      <WorkExperience workExperience={workExperience} />
      <Education education={education} />
    </div>
  );
};

export default RightMainPreview;
