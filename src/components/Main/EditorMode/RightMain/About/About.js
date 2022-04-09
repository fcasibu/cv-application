import { useState } from "react";

const About = (props) => {
  const { onChangeAboutMe } = props;
  const [aboutMe, setAboutMe] = useState("");

  const changeAboutHandler = (event) => {
    setAboutMe(event.target.value);
    onChangeAboutMe(event.target.value);
  };

  return (
    <div>
      <h2 className="font-bold text-lg mb-4 pb-2 border-b-2 border-b-slate-500">
        About Me
      </h2>
      <textarea
        value={aboutMe}
        onChange={changeAboutHandler}
        rows="4"
        cols="100"
        placeholder="Write few sentences about yourself"
        className="p-2 w-full border-2 border-slate-500"
      />
    </div>
  );
};

export default About;
