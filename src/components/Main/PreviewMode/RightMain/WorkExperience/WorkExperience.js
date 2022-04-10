const WorkExperience = (props) => {
  const { workExperience } = props;

  return (
    <div>
      <h2 className="font-bold text-lg mb-4 pb-2 border-b-2 border-b-slate-500">
        Work Experience
      </h2>
      {workExperience.map((el) => {
        return (
          <div key={el.id} className="relative mb-5">
            <h2 className="text-slate-700 font-bold text-lg">{el.role}</h2>
            <h2 className="text-black text-lg font-semibold">{el.company}</h2>
            <p className="text-sm text-slate-500 italic">
              {el.fromDate} - {el.toDate}
            </p>
            <p className="mt-2">{el.jobAchievements}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WorkExperience;
