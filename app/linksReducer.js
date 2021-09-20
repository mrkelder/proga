const initialState = {
  links: [
    { name: "skills", ref: null },
    { name: "prices", ref: null },
    { name: "about", ref: null }
  ]
};

function linksReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "links/changeRef":
      const newLinks = state.links.map(i => {
        if (payload.name === i.name) return { ...i, ref: payload.ref };
        else return i;
      });

      return {
        links: newLinks
      };

    default:
      return state;
  }
}

export default linksReducer;
