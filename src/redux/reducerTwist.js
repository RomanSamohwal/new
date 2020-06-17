import {api, tryCatch} from "../api/api";

const SET_LOADING = 'SET_LOADING';
const SET_MESSAGE = 'SET_MESSAGE';

const initialState = {
    loading: true,
    message: "",

};

export const reducerTwist = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case 'SET_LOADING' :
            return {...state, loading: action.loading}
        case 'SET_MESSAGE': return {...state, message: action.message}
    }
    return state;};
export const changeLoadingSuccess= (loading) => ({
     type: SET_LOADING,
     loading
});

const setMessageSuccess = (message) => ({
    type: SET_MESSAGE,
    message
});


export const responseMessage = (success) =>{
    return (dispatch)=>{
        dispatch(changeLoadingSuccess(true))
        tryCatch(()=>api.sendPostRequest(success))
            .then(r => {
               dispatch(setMessageSuccess(r))
               dispatch(changeLoadingSuccess(false))
            })
    }
}

