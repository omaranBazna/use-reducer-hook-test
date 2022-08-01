const Input = ({ dispatcher }) => {
  return (
    <form className="input">
      <input type="text"></input>
      <button
        onClick={dispatcher({ type: "add", payload: "HelloReducer" })}
        type="submit"
      >
        add
      </button>
    </form>
  );
};
export default Input;
