import OneInput from "./OneInput";

const InputComponent = (props) => {
  return (
    <div>
      <OneInput inputName={props.inputName} />
    </div>
  );
};

export default InputComponent;
