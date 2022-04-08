import OneInput from "./OneInput";

const InputComponent = (props) => {
  return (
    <div>
      <OneInput
        inputName={props.inputName}
        onGetValue={props.onGetValue}
        isDone={props.isDone}
      />
    </div>
  );
};

export default InputComponent;
