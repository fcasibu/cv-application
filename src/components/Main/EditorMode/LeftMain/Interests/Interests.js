import InputComponent from "../../../../InputForm/InputForm";

const Interests = (props) => {
  return (
    <div>
      <h2 className="text-lg">Interests</h2>
      <form>
        <InputComponent inputName="Machine Learning" />
        <button className="bg-white p-2 rounded mt-3">+ Add</button>
      </form>
    </div>
  );
};

export default Interests;
