import { Component } from "react";
import LeftMain from "./EditorMode/LeftMain/LeftMain";

const Main = (props) => {
  const { onChangePersonalInfo, onChangeSkill, onAddSkill, skills, uniqueId } =
    props;
  return (
    <div className="flex">
      <LeftMain
        onChangePersonalInfo={onChangePersonalInfo}
        onChangeSkill={onChangeSkill}
        onAddSkill={onAddSkill}
        skills={skills}
        uniqueId={uniqueId}
      />
      <div></div>
    </div>
  );
};

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="flex">
//         <LeftMain />
//         {this.state}
//       </div>
//     );
//   }
// }

export default Main;
