const Interests = (props) => {
  const { interests } = props;
  return (
    <div>
      <h2 className="text-lg font-bold">Interests</h2>
      {interests.map((el) => {
        return (
          <div key={el.id} className="flex justify-between items-center">
            <div className="text-slate-700 font-bold">{el.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Interests;
