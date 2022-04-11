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
  const [personalInfoObj, setPersonalInfoObj] = useState({
    fullName: "",
    currentRole: "",
    location: "",
    phoneNumber: "",
    email: "",
    githubProfile: "",
    linkedinProfile: "",
  });
  const {
    fullName,
    currentRole,
    location,
    phoneNumber,
    email,
    githubProfile,
    linkedinProfile,
  } = personalInfoObj;
  const [status, setStatus] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    onChangePersonalInfo(personalInfoObj);
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
        onChange={(e) =>
          setPersonalInfoObj((state) => ({
            ...state,
            fullName: e.target.value,
          }))
        }
        disabled={!!status}
      />
      <input
        type="text"
        placeholder="Current Role"
        className="p-2 w-full border-2 border-slate-500 disabled:bg-slate-700 disabled:text-white"
        value={currentRole}
        onChange={(e) =>
          setPersonalInfoObj((state) => ({
            ...state,
            currentRole: e.target.value,
          }))
        }
        disabled={!!status}
      />
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
        <input
          type="text"
          placeholder="City"
          className="p-2 w-full border-2 border-slate-500 disabled:bg-slate-700 disabled:text-white"
          value={location}
          onChange={(e) =>
            setPersonalInfoObj((state) => ({
              ...state,
              location: e.target.value,
            }))
          }
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
          onChange={(e) =>
            setPersonalInfoObj((state) => ({
              ...state,
              phoneNumber: e.target.value,
            }))
          }
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
          onChange={(e) =>
            setPersonalInfoObj((state) => ({
              ...state,
              email: e.target.value,
            }))
          }
          disabled={!!status}
        />
      </div>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon icon={faGithub} />
        <input
          type="text"
          placeholder="Github Profile"
          className="p-2 w-full border-2 border-slate-500 disabled:bg-slate-700 disabled:text-white"
          value={githubProfile}
          onChange={(e) =>
            setPersonalInfoObj((state) => ({
              ...state,
              githubProfile: e.target.value,
            }))
          }
          disabled={!!status}
        />
      </div>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
        <input
          type="text"
          placeholder="LinkedIn Profile"
          className="p-2 w-full border-2 border-slate-500 disabled:bg-slate-700 disabled:text-white"
          value={linkedinProfile}
          onChange={(e) =>
            setPersonalInfoObj((state) => ({
              ...state,
              linkedinProfile: e.target.value,
            }))
          }
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
