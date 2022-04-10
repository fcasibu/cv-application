import { Component } from "react";
import uniqid from "uniqid";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "editor",
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
    this.changeMode = this.changeMode.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.addInterest = this.addInterest.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.deleteInterest = this.deleteInterest.bind(this);
    this.deleteWorkExperience = this.deleteWorkExperience.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.generateTemplate = this.generateTemplate.bind(this);
  }

  changePersonalInfo(personalInfoObj) {
    this.setState((state) => {
      return {
        formDetails: {
          aboutMe: state.formDetails.aboutMe,
          skill: state.formDetails.skill,
          interest: state.formDetails.interest,
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
      };
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
          education: [...state.multipleDetails.education],
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
    this.setState((state) => {
      return {
        formDetails: {
          aboutMe: state.formDetails.aboutMe,
          skill: skillDetail,
          interest: state.formDetails.interest,
          personalInfo: {
            fullName: state.formDetails.personalInfo.fullName,
            currentRole: state.formDetails.personalInfo.currentRole,
            location: state.formDetails.personalInfo.location,
            phoneNumber: state.formDetails.personalInfo.phoneNumber,
            email: state.formDetails.personalInfo.email,
            githubProfile: state.formDetails.personalInfo.github,
            linkedinProfile: state.formDetails.personalInfo.linkedin,
          },
        },
      };
    });
  }

  changeInterest(interestDetail) {
    this.setState((state) => {
      return {
        formDetails: {
          aboutMe: state.formDetails.aboutMe,
          skill: state.formDetails.skill,
          interest: interestDetail,
          personalInfo: {
            fullName: state.formDetails.personalInfo.fullName,
            currentRole: state.formDetails.personalInfo.currentRole,
            location: state.formDetails.personalInfo.location,
            phoneNumber: state.formDetails.personalInfo.phoneNumber,
            email: state.formDetails.personalInfo.email,
            githubProfile: state.formDetails.personalInfo.github,
            linkedinProfile: state.formDetails.personalInfo.linkedin,
          },
        },
      };
    });
  }

  changeAboutMe(aboutDetail) {
    this.setState((state) => {
      return {
        formDetails: {
          aboutMe: aboutDetail,
          skill: state.formDetails.skill,
          interest: state.formDetails.interest,
          personalInfo: {
            fullName: state.formDetails.personalInfo.fullName,
            currentRole: state.formDetails.personalInfo.currentRole,
            location: state.formDetails.personalInfo.location,
            phoneNumber: state.formDetails.personalInfo.phoneNumber,
            email: state.formDetails.personalInfo.email,
            githubProfile: state.formDetails.personalInfo.github,
            linkedinProfile: state.formDetails.personalInfo.linkedin,
          },
        },
      };
    });
  }

  changeMode(mode) {
    this.setState({
      mode,
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
          education: [...state.multipleDetails.education],
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
          education: [...state.multipleDetails.education],
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

  generateTemplate() {
    const educationObj = {
      degree: "BS in Software Engineering",
      schoolName: "Iowa State University",
      fromDate: "2000",
      toDate: "2004",
      id: "1",
    };

    const skillsObj = [
      { name: "Javascript", id: "1" },
      { name: "HTML5", id: "2" },
      { name: "CSS3", id: "3" },
      { name: "React", id: "4" },
      { name: "Node.js", id: "5" },
    ];

    const interestsObj = [
      { name: "Ruby on Rails", id: "1" },
      { name: "Next.js", id: "2" },
      { name: "Python", id: "3" },
      { name: "Game Development", id: "4" },
    ];

    const workExperienceObj = {
      role: "Web Developer",
      company: "CRN Software Solutions",
      jobAchievements:
        "Designed and established multiple user-friendly websites. Formulated plans that resulted in 33% increase in user clicks. Troubleshooted multiple design problems",
      fromDate: "2010",
      toDate: "Present",
      id: "1",
    };
    this.setState({
      formDetails: {
        aboutMe:
          "Creative, project-driven professional with 10+ years of experience in web development and design. Knowledgeable in testing, and debugging processes. Proficient in creating user interfaces, troubleshooting complex issues. Built many crud applications in React.",
        skill: "",
        interest: "",
        personalInfo: {
          fullName: "John Doe",
          currentRole: "Web Developer",
          location: "Ames, IA",
          phoneNumber: "123 4567 890",
          email: "johndoe@gmail.com",
          githubProfile: "github.com/johndoe",
          linkedinProfile: "linkedin.com/in/johndoe",
        },
      },
      multipleDetails: {
        workExperience: [workExperienceObj],
        education: [educationObj],
        skills: skillsObj,
        interests: interestsObj,
      },
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
      changeMode,
      addSkill,
      deleteSkill,
      addInterest,
      deleteInterest,
      deleteWorkExperience,
      deleteEducation,
      generateTemplate,
    } = this;
    const { personalInfo, aboutMe } = this.state.formDetails;
    const { skills, interests, workExperience, education } =
      this.state.multipleDetails;
    const { uniqueId, mode } = this.state;
    return (
      <div className="App bg-slate-800">
        <div className="min-h-screen container max-w-3xl mx-auto flex flex-col gap-10 p-10 bg-white">
          <Header
            onChangeMode={changeMode}
            onGenerateTemplate={generateTemplate}
          />
          <Main
            mode={mode}
            uniqueId={uniqueId}
            skills={skills}
            interests={interests}
            aboutMe={aboutMe}
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
