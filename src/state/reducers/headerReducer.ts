import { HeaderInfo } from "../../components/models/header-model";
import { ACTION_TYPE } from "../action-type";


export type headerState = {
    header: HeaderInfo | null;
}

export type HeaderAction = {
    type: ACTION_TYPE;
    payload: HeaderInfo;
}

const initialState = {
    header: null,
}


const headerReducer = (state: headerState = initialState, action: HeaderAction) => {
    switch (action.type) {
        case ACTION_TYPE.UPDATE_HEADER:
            return { ...state, header: action.payload };
        default:
            return state;
    }
}

export default headerReducer;