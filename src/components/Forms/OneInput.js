import { useState } from "react";

const OneInput = (props) => {
  const [input, setInput] = useState("");

  const changeInputHandler = (event) => {
    setInput(event.target.value);
    props.onGetValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const obj = {
      id: props.id,
      name: input,
    };
    props.onAdd(obj);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={changeInputHandler}
          className="w-full p-2 border-2 border-slate-500"
          placeholder={props.inputName}
        />
        <button
          type="submit"
          className="bg-slate-500 text-white font-bold p-2 rounded mt-3"
        >
          + Add
        </button>
      </form>
    </div>
  );
};

export default OneInput;