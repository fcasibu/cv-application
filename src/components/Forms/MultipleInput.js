import { useState } from "react";

const MultipleInput = (props) => {
  const [multipleInputObj, setMultipleInputObj] = useState({
    firstInput: "",
    secondInput: "",
    thirdInput: "",
    fromDate: "",
    toDate: "",
  });
  const { fromDate, toDate, firstInput, secondInput, thirdInput } =
    multipleInputObj;

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
    setMultipleInputObj({
      firstInput: "",
      secondInput: "",
      thirdInput: "",
      fromDate: "",
      toDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-3">
      <input
        value={firstInput}
        onChange={(e) =>
          setMultipleInputObj({
            ...multipleInputObj,
            firstInput: e.target.value,
          })
        }
        type="text"
        className="w-full p-2 border-2 border-slate-500"
        placeholder={props.inputNames[0]}
      />
      <input
        value={secondInput}
        onChange={(e) =>
          setMultipleInputObj({
            ...multipleInputObj,
            secondInput: e.target.value,
          })
        }
        type="text"
        className="w-full p-2 border-2 border-slate-500"
        placeholder={props.inputNames[1]}
      />
      <div className="flex gap-3">
        <input
          value={fromDate}
          onChange={(e) =>
            setMultipleInputObj({
              ...multipleInputObj,
              fromDate: e.target.value,
            })
          }
          type="text"
          className="w-full p-2 border-2 border-slate-500"
          placeholder="From e.g. 2010"
        />
        <input
          value={toDate}
          onChange={(e) =>
            setMultipleInputObj({
              ...multipleInputObj,
              toDate: e.target.value,
            })
          }
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
          onChange={(e) =>
            setMultipleInputObj({
              ...multipleInputObj,
              thirdInput: e.target.value,
            })
          }
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
