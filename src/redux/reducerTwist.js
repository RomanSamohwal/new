const SET_LOADING = "SET_LOADING";

const initialState = {
    loading: false
};
export const reducerTwist = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING :
            return {...state, loading: false}
    }
    return state;

};
export const changeLoadinAC = () => ({
     type: SET_LOADING
});