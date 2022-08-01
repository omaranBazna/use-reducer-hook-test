const Item = ({ text, Itemid, dispatcher }) => {
  return (
    <div className="item">
      {text}
      <button
        onClick={() => {
          dispatcher({ type: "remove", payload: { id: Itemid } });
        }}
      >
        x
      </button>
    </div>
  );
};
export default Item;
