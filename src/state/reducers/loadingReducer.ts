import { ACTION_TYPE } from "../action-type";


export type loadingState = {
    loading: boolean;
}

export type LoadingAction = {
    type: ACTION_TYPE;
}

const initialState = {
    loading: false,
}


const loadingReducer = (state: loadingState = initialState, action: LoadingAction) => {
    switch (action.type) {
        case ACTION_TYPE.LOADING_ACTIVE:
            return { ...state, loading: true };
        case ACTION_TYPE.LOADING_INACTIVE:
            return { ...state, loading: false };
        default:
            return state;
    }
}

export default loadingReducer;