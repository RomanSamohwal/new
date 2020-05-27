let state = {
    tasks: [],
    filterValue: "All"
};

export const save = (key, state) => {
    localStorage.setItem(key, JSON.stringify(state));
};

export const restore = (key) => {
    if (localStorage.getItem(key) === null) {
        return state
    } else {
        return JSON.parse( localStorage.getItem(key))
    }
};



