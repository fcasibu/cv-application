import About from "./About/About";
import WorkExperience from "./WorkExperience/WorkExperience";

const RightMain = (props) => {
  const { onChangeAboutMe } = props;
  return (
    <div className="flex flex-col flex-1 gap-5">
      <About onChangeAboutMe={onChangeAboutMe} />
      <WorkExperience />
    </div>
  );
};

export default RightMain;
