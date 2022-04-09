import { Component } from "react";
import Interests from "./Interests/Interests";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Skills from "./Skills/Skills";

const LeftMain = (props) => {
  const {
    onChangePersonalInfo,
    onChangeSkill,
    onAddSkill,
    onDeleteSkill,
    skills,
    interestsId,
    skillsId,
    onChangeInterest,
    onAddInterest,
    interests,
    onDeleteInterest,
  } = props;
  return (
    <div className="flex flex-col gap-10">
      <PersonalInfo onChangePersonalInfo={onChangePersonalInfo} />
      <Skills
        onChangeSkill={onChangeSkill}
        onAddSkill={onAddSkill}
        onDeleteSkill={onDeleteSkill}
        skills={skills}
        skillsId={skillsId}
      />
      <Interests
        onChangeInterest={onChangeInterest}
        onAddInterest={onAddInterest}
        interests={interests}
        onDeleteInterest={onDeleteInterest}
        interestsId={interestsId}
      />
    </div>
  );
};

// class LeftMain extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div clasName="flex">
//         <div>{this.state}</div>
//       </div>
//     );
//   }
// }

export default LeftMain;
