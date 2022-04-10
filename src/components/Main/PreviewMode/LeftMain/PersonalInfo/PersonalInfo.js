import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const PersonalInfo = (props) => {
  const { personalInfo } = props;
  return (
    <div className="flex flex-col gap-1 justify-start items-start">
      <h2 className="font-bold text-[25px] text-slate-800">
        {personalInfo.fullName || "Full Name"}
      </h2>
      <h3 className="font-bold text-lg text-slate-600">
        {personalInfo.currentRole || "Current Role"}
      </h3>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="w-4 h-4 text-xs text-slate-700"
        />
        <p>{personalInfo.location || "Location"}</p>
      </div>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon
          icon={faPhone}
          className="w-4 h-4 text-xs text-slate-700"
        />
        <p>{personalInfo.phoneNumber || "Phone Number"}</p>
      </div>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon
          icon={faAt}
          className="w-4 h-4 text-xs text-slate-700"
        />
        <p>{personalInfo.email || "Email Address"}</p>
      </div>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon
          icon={faGithub}
          className="w-4 h-4 text-xs text-slate-700"
        />
        <p>{personalInfo.githubProfile || "Github Profile"}</p>
      </div>
      <div className="flex gap-4 items-center">
        <FontAwesomeIcon
          icon={faLinkedin}
          className="w-4 h-4 text-xs text-slate-700"
        />
        <p>{personalInfo.linkedinProfile || "LinkedIn Profile"}</p>
      </div>
    </div>
  );
};

export default PersonalInfo;
