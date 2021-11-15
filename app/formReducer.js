const initialState = {
  who: "",
  contact: "",
  text: ""
};

function formReducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case "form/changeWho":
      return { ...state, who: payload };
    case "form/changeContact":
      return { ...state, contact: payload };
    case "form/changeText":
      return { ...state, text: payload };
    default:
      return state;
  }
}

export default formReducer;
