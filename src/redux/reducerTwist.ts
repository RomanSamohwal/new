import {api, tryCatch} from "../api/api";
import {Dispatch} from "redux";

const SET_LOADING = 'SET_LOADING';
const SET_MESSAGE = 'SET_MESSAGE';

type InitialStateType = {
    loading: boolean
    message: string
}

const initialState: InitialStateType = {
    loading: true,
    message: "",

};

export const reducerTwist = (state= initialState, action: ActionTypes):InitialStateType => {
    debugger
    switch (action.type) {
        case 'SET_LOADING' :
            return {...state, loading: action.loading}
        case 'SET_MESSAGE': return {...state, message: action.message}
    }
    return state;};

type ActionTypes = ChangeLoadingSuccessType|SetMessageSuccessType;

type ChangeLoadingSuccessType = {
    type: typeof SET_LOADING
    loading : boolean
}

export const changeLoadingSuccess= (loading:boolean):ChangeLoadingSuccessType => ({
     type: SET_LOADING,
     loading
});

type SetMessageSuccessType = {
    type: typeof SET_MESSAGE
    message : string
}

//AC creator
const setMessageSuccess = (message: string):SetMessageSuccessType => ({
    type: SET_MESSAGE,
    message
});

//thunk
export const responseMessage = (success: boolean) =>{

    return (dispatch: Dispatch<ActionTypes>)=>{
        dispatch(changeLoadingSuccess(true))
        tryCatch(()=>api.sendPostRequest(success))
            .then(r => {
               dispatch(setMessageSuccess(r))
               dispatch(changeLoadingSuccess(false))
            })
    }
};

