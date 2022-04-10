import About from "./About/About";

const RightMainPreview = (props) => {
  const { aboutMe } = props;
  return (
    <div className="flex flex-col flex-1 gap-5">
      <About aboutMe={aboutMe} />
    </div>
  );
};

export default RightMainPreview;
