const Check = ({ order, value, setvalue }) => {
  return (
    <div>
      <input
        type="checkbox"
        name={order}
        id={order}
        value={value}
        onChange={setvalue}
      />
      <label htmlFor={order}>checkbox {order} </label>
    </div>
  );
};

export default Check;
