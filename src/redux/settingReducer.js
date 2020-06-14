const SET_STYLE = 'SET_STYLE';


const initialState = {
  style: ""
};

export const settingReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'SET_STYLE': return {...state, style: action.style}
    }
    return state;
};


export const setStyleAC = (style)=>({type: SET_STYLE, style});
