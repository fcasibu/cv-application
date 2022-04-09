import Interests from "./Interests/Interests";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Skills from "./Skills/Skills";

const LeftMainEditor = (props) => {
  const {
    onChangePersonalInfo,
    onChangeSkill,
    onAddSkill,
    onDeleteSkill,
    skills,
    uniqueId,
    onChangeInterest,
    onAddInterest,
    interests,
    onDeleteInterest,
  } = props;
  return (
    <div className="flex flex-col gap-10 border-r-2 border-r-slate-500 pr-5">
      <PersonalInfo onChangePersonalInfo={onChangePersonalInfo} />
      <Skills
        onChangeSkill={onChangeSkill}
        onAddSkill={onAddSkill}
        onDeleteSkill={onDeleteSkill}
        skills={skills}
        uniqueId={uniqueId}
      />
      <Interests
        onChangeInterest={onChangeInterest}
        onAddInterest={onAddInterest}
        interests={interests}
        onDeleteInterest={onDeleteInterest}
        uniqueId={uniqueId}
      />
    </div>
  );
};

export default LeftMainEditor;
