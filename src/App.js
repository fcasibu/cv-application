import { Component } from "react";
import uniqid from "uniqid";
import "./styles/App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqid(),
      formDetails: {
        aboutMe: "",
        skill: "",
        interest: "",
        personalInfo: {
          fullName: "",
          currentRole: "",
          location: "",
          phoneNumber: "",
          email: "",
          githubProfile: "",
          linkedinProfile: "",
        },
        workExperience: {
          role: "",
          company: "",
          fromDate: "",
          toDate: "",
          jobAchievements: "",
        },
        education: {
          degree: "",
          schoolName: "",
          fromDate: "",
          toDate: "",
        },
      },
      multipleDetails: {
        workExperience: [],
        skills: [],
        interests: [],
      },
    };

    this.changePersonalInfo = this.changePersonalInfo.bind(this);
    this.changeSkill = this.changeSkill.bind(this);
    this.addSkill = this.addSkill.bind(this);
  }

  changePersonalInfo(personalInfoObj) {
    this.setState({
      formDetails: {
        personalInfo: {
          fullName: personalInfoObj.fullName,
          currentRole: personalInfoObj.currentRole,
          location: personalInfoObj.location,
          phoneNumber: personalInfoObj.phoneNumber,
          email: personalInfoObj.email,
          githubProfile: personalInfoObj.github,
          linkedinProfile: personalInfoObj.linkedin,
        },
      },
    });
  }

  changeSkill(skillDetail) {
    this.setState({
      formDetails: {
        skill: skillDetail,
      },
    });
  }

  addSkill(skillDetail) {
    this.setState((state) => {
      return {
        id: uniqid(),
        multipleDetails: {
          skills: [...state.multipleDetails.skills, skillDetail],
        },
      };
    });
  }

  render() {
    const { changePersonalInfo, changeSkill, addSkill } = this;
    const { personalInfo, skill } = this.state.formDetails;
    const { skills } = this.state.multipleDetails;
    return (
      <div className="App">
        <div className="min-h-screen container max-w-3xl mx-auto flex flex-col gap-10 p-10 bg-slate-500">
          <Header />
          <Main
            onChangePersonalInfo={changePersonalInfo}
            personalInfo={personalInfo}
            onChangeSkill={changeSkill}
            onAddSkill={addSkill}
            skills={skills}
            uniqueId={this.state.id}
          />
        </div>
      </div>
    );
  }
}

export default App;
