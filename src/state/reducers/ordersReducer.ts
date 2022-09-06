
import { Order } from "../../components/models/orders-model";
import { ACTION_TYPE } from "../action-type";


export type OrderState = {
    orders: Order | null;
}

export type OrderAction = {
    type: ACTION_TYPE;
    payload: Order;
}

const initialState = {
    orders: null,
}


const ordersReducer = (state: OrderState = initialState, action: OrderAction) => {
    switch (action.type) {
        case ACTION_TYPE.UPDATE_ORDERS:
            return { ...state, orders: action.payload }

        default:
            return state;
    }
}

export default ordersReducer;