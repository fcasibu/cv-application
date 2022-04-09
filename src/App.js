import { Component } from "react";
import uniqid from "uniqid";
import "./styles/App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueId: uniqid(),
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
        education: [],
        skills: [],
        interests: [],
      },
    };

    this.changePersonalInfo = this.changePersonalInfo.bind(this);
    this.changeWorkExperience = this.changeWorkExperience.bind(this);
    this.changeEducation = this.changeEducation.bind(this);
    this.changeSkill = this.changeSkill.bind(this);
    this.changeInterest = this.changeInterest.bind(this);
    this.changeAboutMe = this.changeAboutMe.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.addInterest = this.addInterest.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.deleteInterest = this.deleteInterest.bind(this);
    this.deleteWorkExperience = this.deleteWorkExperience.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
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

  changeWorkExperience(workExperienceObj) {
    this.setState((state) => {
      return {
        uniqueId: uniqid(),
        multipleDetails: {
          workExperience: [
            ...state.multipleDetails.workExperience,
            workExperienceObj,
          ],
          skills: [...state.multipleDetails.skills],
          interests: [...state.multipleDetails.interests],
          education: [...state.multipleDetails.educaion],
        },
      };
    });
  }

  changeEducation(educationObj) {
    this.setState((state) => {
      return {
        uniqueId: uniqid(),
        multipleDetails: {
          workExperience: [...state.multipleDetails.workExperience],
          skills: [...state.multipleDetails.skills],
          interests: [...state.multipleDetails.interests],
          education: [...state.multipleDetails.education, educationObj],
        },
      };
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

  changeAboutMe(aboutDetail) {
    this.setState({
      formDetails: {
        aboutMe: aboutDetail,
      },
    });
  }

  addSkill() {
    const skillDetail = {
      name: this.state.formDetails.skill,
      id: this.state.uniqueId,
    };
    this.setState((state) => {
      return {
        uniqueId: uniqid(),
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
      id: this.state.uniqueId,
    };
    this.setState((state) => {
      return {
        uniqueId: uniqid(),
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
          education: state.multipleDetails.education,
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
          education: state.multipleDetails.education,
        },
      };
    });
  }

  deleteWorkExperience(newWorkExperience) {
    this.setState((state) => {
      return {
        multipleDetails: {
          workExperience: newWorkExperience,
          skills: state.multipleDetails.skills,
          interests: state.multipleDetails.interests,
          education: state.multipleDetails.education,
        },
      };
    });
  }

  deleteEducation(newEducation) {
    this.setState((state) => {
      return {
        multipleDetails: {
          workExperience: state.multipleDetails.workExperience,
          skills: state.multipleDetails.skills,
          interests: state.multipleDetails.interests,
          education: newEducation,
        },
      };
    });
  }

  render() {
    const {
      changePersonalInfo,
      changeWorkExperience,
      changeEducation,
      changeSkill,
      changeInterest,
      changeAboutMe,
      addSkill,
      deleteSkill,
      addInterest,
      deleteInterest,
      deleteWorkExperience,
      deleteEducation,
    } = this;
    const { personalInfo } = this.state.formDetails;
    const { skills, interests, workExperience, education } =
      this.state.multipleDetails;
    const { uniqueId } = this.state;
    return (
      <div className="App bg-slate-800">
        <div className="min-h-screen container max-w-3xl mx-auto flex flex-col gap-10 p-10 bg-white">
          <Header />
          <Main
            uniqueId={uniqueId}
            skills={skills}
            interests={interests}
            workExperience={workExperience}
            education={education}
            personalInfo={personalInfo}
            onChangePersonalInfo={changePersonalInfo}
            onChangeWorkExperience={changeWorkExperience}
            onChangeEducation={changeEducation}
            onChangeSkill={changeSkill}
            onChangeInterest={changeInterest}
            onChangeAboutMe={changeAboutMe}
            onAddSkill={addSkill}
            onAddInterest={addInterest}
            onDeleteSkill={deleteSkill}
            onDeleteInterest={deleteInterest}
            onDeleteWorkExperience={deleteWorkExperience}
            onDeleteEducation={deleteEducation}
          />
        </div>
      </div>
    );
  }
}

export default App;
