import { useState } from "react";
import OneInput from "../../../../Forms/OneInput";

const Interests = (props) => {
  const getValue = (value) => {
    props.onChangeInterest(value);
  };

  const deleteClickHandler = (event) => {
    const filteredList = props.interests.filter(
      (el) => el.id !== event.target.id
    );
    props.onDeleteInterest(filteredList);
  };

  return (
    <div>
      <h2 className="text-lg font-bold">Interests</h2>
      {props.interests.map((el) => {
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
        inputName="Machine Learning"
        onGetValue={getValue}
        onAdd={props.onAddInterest}
        id={props.interestsId}
      />
    </div>
  );
};

export default Interests;
