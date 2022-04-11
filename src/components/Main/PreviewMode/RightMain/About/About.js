const About = (props) => {
  const { aboutMe } = props;
  return (
    <div>
      <h2 className="font-bold text-lg mb-4 pb-2 border-b-2 border-b-slate-500">
        About Me
      </h2>
      <p className="break-words w-[50ch]">{aboutMe}</p>
    </div>
  );
};

export default About;
