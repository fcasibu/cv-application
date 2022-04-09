function Header(props) {
  const editorClickHandler = () => {
    props.onChangeMode("editor");
  };

  const previewClickHandler = () => {
    props.onChangeMode("preview");
  };

  return (
    <div className="self-center bg-white p-5">
      <h1 className="font-bold text-3xl">Create your CV!</h1>
      <div className="flex gap-2 justify-center">
        <button
          onClick={editorClickHandler}
          className="bg-slate-500 text-white font-bold p-2 rounded mt-3 hover:bg-slate-800 transition-colors ease-in-out delay-75"
        >
          Editor Mode
        </button>
        <button
          onClick={previewClickHandler}
          className="bg-slate-500 text-white font-bold p-2 rounded mt-3 hover:bg-slate-800 transition-colors ease-in-out delay-75"
        >
          Preview Mode
        </button>
      </div>
    </div>
  );
}

export default Header;
