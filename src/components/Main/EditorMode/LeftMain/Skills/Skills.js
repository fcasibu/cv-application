import OneInput from "../../../../Forms/OneInput";

const Skills = (props) => {
  const getValue = (value) => {
    props.onChangeSkill(value);
  };

  const deleteClickHandler = (event) => {
    const filteredList = props.skills.filter((el) => el.id !== event.target.id);
    props.onDeleteSkill(filteredList);
  };

  return (
    <div>
      <h2 className="text-lg font-bold">Skills</h2>
      {props.skills.map((el) => {
        return (
          <div key={el.id} className="flex justify-between items-center mb-2">
            <div className="text-slate-700 font-bold">{el.name}</div>
            <button
              className="text-slate-700 cursor-pointer font-bold"
              id={el.id}
              onClick={deleteClickHandler}
            >
              X
            </button>
          </div>
        );
      })}
      <OneInput
        inputName="Javascript"
        onGetValue={getValue}
        onAdd={props.onAddSkill}
        id={props.uniqueId}
      />
    </div>
  );
};

export default Skills;
