import { useState } from "react";
import { useSelector } from "react-redux";

function Input({ ...attributes }) {
  const [value, setValue] = useState("");

  const state = useSelector(state => state.links);

  return <input className="input" {...attributes} />;
}

export default Input;
