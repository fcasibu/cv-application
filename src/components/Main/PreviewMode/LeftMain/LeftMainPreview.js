import Interests from "./Interests/Interests";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Skills from "./Skills/Skills";

const LeftMainPreview = (props) => {
  const { personalInfo, skills, interests } = props;
  return (
    <div className="flex flex-[0.5] flex-col gap-5 border-r-2 border-r-slate-500 pr-5">
      <PersonalInfo personalInfo={personalInfo} />
      <Skills skills={skills} />
      <Interests interests={interests} />
    </div>
  );
};

export default LeftMainPreview;
