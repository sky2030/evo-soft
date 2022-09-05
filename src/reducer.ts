import { UPDATE_HEADER_DATA, UPDATE_ORDERS_DATA } from "./actions";
import { HeaderInfo } from "./components/models/header-model"
import { Order } from "./components/models/orders-model";


export type appState = {
    header: HeaderInfo | null;
    orders: Order | null;
}

export type Action = {
    type: string;
    header?: HeaderInfo;
    orders?: Order;
}

const initialState = {
    header: null,
    orders: null
}


const appReducer = (state: appState = initialState, action: Action) => {
    switch (action.type) {
        case UPDATE_HEADER_DATA:
            return { ...state, header: action.header };
        case UPDATE_ORDERS_DATA:
            return { ...state, order: action.orders }

        default:
            return state;
    }
}

export default appReducer;