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

  return (
    <form className="flex flex-col gap-5" onSubmit={submitHandler}>
      <input
        className="p-2"
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={changeFullNameHandler}
        disabled={!!status}
      />
      <input
        className="p-2"
        type="text"
        placeholder="Current Role"
        value={currentRole}
        onChange={changeCurrentRoleHandler}
        disabled={!!status}
      />
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4" />
        <input
          type="text"
          placeholder="City"
          className="p-1"
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
          className="p-1"
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
          className="p-1"
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
          className="p-1"
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
          className="p-1"
          value={linkedin}
          onChange={changeLinkedinHandler}
          disabled={!!status}
        />
      </div>
      <div className="flex gap-5">
        <button className="bg-white p-2 rounded">Edit Info</button>
        <button type="submit" className="bg-white p-2 rounded">
          Submit Info
        </button>
      </div>
    </form>
  );
};

export default PersonalInfo;
