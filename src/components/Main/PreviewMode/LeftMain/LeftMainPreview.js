import PersonalInfo from "./PersonalInfo/PersonalInfo";

const LeftMainPreview = (props) => {
  const { personalInfo } = props;
  return (
    <div className="flex flex-col gap-10 border-r-2 border-r-slate-500 pr-5">
      <PersonalInfo personalInfo={personalInfo} />
    </div>
  );
};

export default LeftMainPreview;
