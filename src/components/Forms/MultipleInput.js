import { useState } from "react";

const MultipleInput = (props) => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const firstInputChangeHandler = (event) => {
    setFirstInput(event.target.value);
  };
  const secondInputChangeHandler = (event) => {
    setSecondInput(event.target.value);
  };
  const thirdInputChangeHandler = (event) => {
    setThirdInput(event.target.value);
  };
  const fromDateChangeHandler = (event) => {
    setFromDate(event.target.value);
  };
  const toDateChangeHandler = (event) => {
    setToDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let obj;
    if (props.component === "WorkExperience") {
      obj = {
        fromDate,
        toDate,
        role: firstInput,
        company: secondInput,
        jobAchievements: thirdInput,
        id: props.uniqueId,
      };
    } else {
      obj = {
        fromDate,
        toDate,
        degree: firstInput,
        schoolName: secondInput,
        id: props.uniqueId,
      };
    }
    props.onAdd(obj);
    setFirstInput("");
    setSecondInput("");
    setThirdInput("");
    setFromDate("");
    setToDate("");
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-3">
      <input
        value={firstInput}
        onChange={firstInputChangeHandler}
        type="text"
        className="w-full p-2 border-2 border-slate-500"
        placeholder={props.inputNames[0]}
      />
      <input
        value={secondInput}
        onChange={secondInputChangeHandler}
        type="text"
        className="w-full p-2 border-2 border-slate-500"
        placeholder={props.inputNames[1]}
      />
      <div className="flex gap-3">
        <input
          value={fromDate}
          onChange={fromDateChangeHandler}
          type="text"
          className="w-full p-2 border-2 border-slate-500"
          placeholder="From e.g. 2010"
        />
        <input
          value={toDate}
          onChange={toDateChangeHandler}
          type="text"
          className="w-full p-2 border-2 border-slate-500"
          placeholder="To e.g. 2022 or Present"
        />
      </div>
      {props.component === "Education" ? (
        ""
      ) : (
        <textarea
          value={thirdInput}
          onChange={thirdInputChangeHandler}
          type="text"
          className="w-full p-2 border-2 border-slate-500"
          placeholder={props.inputNames[2]}
        />
      )}

      <button
        type="submit"
        className="bg-slate-500 text-white font-bold p-2 rounded mt-3 hover:bg-slate-800 transition-colors ease-in-out delay-75"
      >
        + Add
      </button>
    </form>
  );
};

export default MultipleInput;
