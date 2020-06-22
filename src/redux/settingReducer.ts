const SET_STYLE = 'SET_STYLE';

type InitialStateType = {
    style: any
}

const initialState = {
    style: ""
};

export const settingReducer = (state=initialState, action:SetStyleACType):InitialStateType=>{
    debugger
    switch (action.type) {
        case 'SET_STYLE': return {...state, style: action.style}
    }
    return state;
};

type SetStyleACType = {
    type: typeof SET_STYLE
    style : any
}

export const setStyleAC = (style: any):SetStyleACType =>({type: SET_STYLE, style});

