import MultipleInput from "../../../../Forms/MultipleInput";

const Education = (props) => {
  const { onChangeEducation, education, uniqueId, onDeleteEducation } = props;
  const inputNames = ["Degree", "School Name"];

  const deleteClickHandler = (event) => {
    const filteredList = education.filter((el) => el.id !== event.target.id);

    onDeleteEducation(filteredList);
  };

  return (
    <div>
      <h2 className="font-bold text-lg mb-4 pb-2 border-b-2 border-b-slate-500">
        Education
      </h2>
      {education.map((el) => {
        return (
          <div key={el.id} className="relative mb-5">
            <h2 className="text-slate-700 font-bold text-lg">{el.degree}</h2>
            <h2 className="text-black text-lg font-semibold">
              {el.schoolName}
            </h2>
            <p className="text-sm text-slate-500 italic">
              {el.fromDate} - {el.toDate}
            </p>
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
        onAdd={onChangeEducation}
        component="Education"
        uniqueId={uniqueId}
      />
    </div>
  );
};

export default Education;
