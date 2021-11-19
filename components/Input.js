import { useSelector } from "react-redux";

function Input({ error, inputname, ...attributes }) {
  const state = useSelector(state => state.form[inputname]);
  return (
    <input
      className={`input ${error ? "outline-error" : "outline"}`}
      {...attributes}
      value={state}
    />
  );
}

export default Input;
