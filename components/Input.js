import { useSelector } from "react-redux";

function Input({ ...attributes }) {
  const state = useSelector(state => state.form[attributes.inputname]);
  return <input className="input" {...attributes} value={state} />;
}

export default Input;
