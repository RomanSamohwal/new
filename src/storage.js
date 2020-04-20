

export const save = (state) => {
    localStorage.setItem("our-state", JSON.stringify(state));
};

export const restore = (state) => {
    let state1 = state;
    let stateAsString = localStorage.getItem("our-state");
    if (stateAsString) {
       return JSON.parse(stateAsString);
    } else return  state1;
};



