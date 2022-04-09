import { Component } from "react";
import uniqid from "uniqid";
import "./styles/App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillsId: uniqid(),
      interestsId: uniqid(),
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
    this.changeInterest = this.changeInterest.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.addInterest = this.addInterest.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.deleteInterest = this.deleteInterest.bind(this);
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

  changeInterest(interestDetail) {
    this.setState({
      formDetails: {
        interest: interestDetail,
      },
    });
  }

  addSkill() {
    const skillDetail = {
      name: this.state.formDetails.skill,
      id: this.state.skillsId,
    };
    this.setState((state) => {
      console.log(this.state.multipleDetails.skills);
      return {
        skillsId: uniqid(),
        multipleDetails: {
          workExperience: [...state.multipleDetails.workExperience],
          skills: [...state.multipleDetails.skills, skillDetail],
          interests: [...state.multipleDetails.interests],
        },
      };
    });
  }

  addInterest() {
    const interestDetail = {
      name: this.state.formDetails.interest,
      id: this.state.interestsId,
    };
    this.setState((state) => {
      console.log(this.state.multipleDetails.interests);
      return {
        interestsId: uniqid(),
        multipleDetails: {
          workExperience: [...state.multipleDetails.workExperience],
          skills: [...state.multipleDetails.skills],
          interests: [...state.multipleDetails.interests, interestDetail],
        },
      };
    });
  }

  deleteSkill(newSkills) {
    this.setState((state) => {
      return {
        multipleDetails: {
          workExperience: state.multipleDetails.workExperience,
          skills: newSkills,
          interests: state.multipleDetails.interests,
        },
      };
    });
  }

  deleteInterest(newInterests) {
    this.setState((state) => {
      return {
        multipleDetails: {
          workExperience: state.multipleDetails.workExperience,
          skills: state.multipleDetails.skills,
          interests: newInterests,
        },
      };
    });
  }

  render() {
    const {
      changePersonalInfo,
      changeSkill,
      changeInterest,
      addSkill,
      deleteSkill,
      addInterest,
      deleteInterest,
    } = this;
    const { personalInfo, skill, interest } = this.state.formDetails;
    const { skills, interests } = this.state.multipleDetails;
    return (
      <div className="App bg-slate-800">
        <div className="min-h-screen container max-w-3xl mx-auto flex flex-col gap-10 p-10 bg-white">
          <Header />
          <Main
            interestsId={this.state.interestsId}
            skillsId={this.state.skillsId}
            onChangePersonalInfo={changePersonalInfo}
            personalInfo={personalInfo}
            onChangeSkill={changeSkill}
            onChangeInterest={changeInterest}
            onAddSkill={addSkill}
            onAddInterest={addInterest}
            skills={skills}
            interests={interests}
            onDeleteSkill={deleteSkill}
            onDeleteInterest={deleteInterest}
          />
        </div>
      </div>
    );
  }
}

export default App;
