import { Component } from "react";
import LeftMain from "./EditorMode/LeftMain/LeftMain";

const Main = (props) => {
  const { onChangePersonalInfo } = props;
  return (
    <div className="flex">
      <LeftMain onChangePersonalInfo={onChangePersonalInfo} />
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
