import InputComponent from "../../../../InputForm/InputForm";

const Skills = (props) => {
  return (
    <div>
      <h2 className="text-lg">Skills</h2>
      <form>
        <InputComponent inputName="Javascript" />
        <button className="bg-white p-2 rounded mt-3">+ Add Skill</button>
      </form>
    </div>
  );
};

export default Skills;
