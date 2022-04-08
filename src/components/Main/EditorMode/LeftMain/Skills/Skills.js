import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import InputComponent from "../../../../InputForm/InputForm";

const Skills = (props) => {
  const [skill, setSkill] = useState("");
  const [isDone, setIsDone] = useState(false);

  const getSkillHandler = (value) => {
    setSkill(value);
    props.onChangeSkill(skill);
    setIsDone(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const skillObj = {
      id: props.uniqueId,
      skillName: skill,
    };
    props.onAddSkill(skillObj);
    setIsDone(true);
  };

  return (
    <div>
      <h2 className="text-lg font-bold">Skills</h2>
      {props.skills.map((el) => {
        return (
          <div key={el.id} className="flex justify-between items-center mb-2">
            <div className="text-white font-bold">{el.skillName}</div>
            <FontAwesomeIcon icon={faX} className="text-white cursor-pointer" />
          </div>
        );
      })}
      <form onSubmit={submitHandler}>
        <InputComponent
          inputName="Javascript"
          onGetValue={getSkillHandler}
          isDone={isDone}
        />
        <button className="bg-white p-2 rounded mt-3" type="submit">
          + Add
        </button>
      </form>
    </div>
  );
};

export default Skills;
