const Input = ({ dispatcher }) => {
  return (
    <>
      <input type="text"></input>
      <button
        onClick={() => {
          dispatcher({ type: "add", payload: "HelloReducer" });
        }}
      >
        add
      </button>
    </>
  );
};
export default Input;
