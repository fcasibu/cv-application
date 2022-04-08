import { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const { changePersonalInfo } = this;
    const { personalInfo } = this.state.formDetails;
    return (
      <div className="App">
        <div className="min-h-screen container max-w-3xl mx-auto flex flex-col gap-10 p-10 bg-slate-500">
          <Header />
          <Main
            onChangePersonalInfo={changePersonalInfo}
            personalInfo={personalInfo}
          />
        </div>
      </div>
    );
  }
}

export default App;
