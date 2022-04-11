import MultipleInput from "../../../../Forms/MultipleInput";

const WorkExperience = (props) => {
  const {
    onChangeWorkExperience,
    workExperience,
    uniqueId,
    onDeleteWorkExperience,
  } = props;
  const inputNames = ["Role", "Company", "Job Achievement/Description"];

  const deleteClickHandler = (event) => {
    const filteredList = workExperience.filter(
      (el) => el.id !== event.target.id
    );

    onDeleteWorkExperience(filteredList);
  };

  return (
    <div>
      <h2 className="font-bold text-lg mb-4 pb-2 border-b-2 border-b-slate-500">
        Work Experience
      </h2>
      {workExperience.map((el) => {
        return (
          <div key={el.id} className="relative mb-5">
            <h2 className="text-slate-700 font-bold text-lg">{el.role}</h2>
            <h2 className="text-black text-lg font-semibold">{el.company}</h2>
            <p className="text-sm text-slate-500 italic">
              {el.fromDate} - {el.toDate}
            </p>
            <p className="mt-2 break-words w-[50ch]">{el.jobAchievements}</p>
            <div
              className="absolute right-0 top-2 font-bold text-lg cursor-pointer"
              id={el.id}
              onClick={deleteClickHandler}
            >
              X
            </div>
          </div>
        );
      })}
      <MultipleInput
        inputNames={inputNames}
        onAdd={onChangeWorkExperience}
        component="WorkExperience"
        uniqueId={uniqueId}
      />
    </div>
  );
};

export default WorkExperience;
