import { useState } from "react";

const OneInput = (props) => {
  const [input, setInput] = useState("");

  const changeInputHandler = (event) => {
    setInput(event.target.value);
    props.onGetValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={props.isDone ? "" : input}
        onChange={changeInputHandler}
        className="w-full p-2"
        placeholder={props.inputName}
      />
    </div>
  );
};

export default OneInput;
