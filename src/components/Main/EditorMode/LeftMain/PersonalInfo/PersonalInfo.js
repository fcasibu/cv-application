import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const PersonalInfo = (props) => {
  const { onChangePersonalInfo } = props;
  const [fullName, setFullName] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [status, setStatus] = useState(false);

  const changeLocationHandler = (event) => {
    setLocation(event.target.value);
  };

  const changePhoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  };
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const changeGithubHandler = (event) => {
    setGithub(event.target.value);
  };
  const changeLinkedinHandler = (event) => {
    setLinkedin(event.target.value);
  };

  const changeFullNameHandler = (event) => {
    setFullName(event.target.value);
  };
  const changeCurrentRoleHandler = (event) => {
    setCurrentRole(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const personalInfo = {
      fullName,
      currentRole,
      location,
      phoneNumber,
      email,
      github,
      linkedin,
    };

    onChangePersonalInfo(personalInfo);
    setStatus(true);
  };

  const editClickHandler = () => {
    setStatus(false);
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Full Name"
        className="p-2 w-full border-2 border-slate-500 disabled:bg-slate-700 disabled:text-white"
        value={fullName}
        onChange={changeFullNameHandler}
        disabled={!!status}
      />
      <input
        type="text"
        placeholder="Current Role"
        className="p-2 w-full border-2 border-slate-500 disabled:bg-slate-700 disabled:text-white"
        value={currentRole}
        onChange={changeCurrentRoleHandler}
        disabled={!!status}
      />
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
        <input
          type="text"
          placeholder="City"
          className="p-2 w-full border-2 border-slate-500 disabled:bg-slate-700 disabled:text-white"
          value={location}
          onChange={changeLocationHandler}
          disabled={!!status}
        />
      </div>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon icon={faPhone} />
        <input
          type="text"
          placeholder="Phone Number"
          className="p-2 w-full border-2 border-slate-500 disabled:bg-slate-700 disabled:text-white"
          value={phoneNumber}
          onChange={changePhoneNumberHandler}
          disabled={!!status}
        />
      </div>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon icon={faAt} />
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 w-full border-2 border-slate-500 disabled:bg-slate-700 disabled:text-white"
          value={email}
          onChange={changeEmailHandler}
          disabled={!!status}
        />
      </div>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon icon={faGithub} />
        <input
          type="text"
          placeholder="Github Profile"
          className="p-2 w-full border-2 border-slate-500 disabled:bg-slate-700 disabled:text-white"
          value={github}
          onChange={changeGithubHandler}
          disabled={!!status}
        />
      </div>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
        <input
          type="text"
          placeholder="LinkedIn Profile"
          className="p-2 w-full border-2 border-slate-500 disabled:bg-slate-700 disabled:text-white"
          value={linkedin}
          onChange={changeLinkedinHandler}
          disabled={!!status}
        />
      </div>
      <div className="flex gap-5">
        <button
          type="button"
          className="bg-slate-500 text-white font-bold p-2 rounded hover:bg-slate-800 transition-colors ease-in-out delay-75"
          onClick={editClickHandler}
        >
          Edit Info
        </button>
        <button
          type="submit"
          className="bg-slate-500 text-white font-bold p-2 rounded hover:bg-slate-800 transition-colors ease-in-out delay-75"
        >
          Submit Info
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo;
