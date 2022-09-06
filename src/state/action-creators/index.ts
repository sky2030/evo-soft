import { Dispatch } from "redux"
import { HeaderInfo } from "../../components/models/header-model";
import { Order } from "../../components/models/orders-model";

import { ACTION_TYPE } from "../action-type";
import { HeaderAction } from "../reducers/headerReducer";
import { LoadingAction } from "../reducers/loadingReducer";
import { OrderAction } from "../reducers/ordersReducer";


export const updateHeader = (headerInfo: HeaderInfo) => {
    return (dispatch: Dispatch<HeaderAction>) => {
        dispatch({
            type: ACTION_TYPE.UPDATE_HEADER,
            payload: headerInfo
        })
    }
};

export const updateOrders = (orders: Order) => {
    return (dispatch: Dispatch<OrderAction>) => {
        dispatch({
            type: ACTION_TYPE.UPDATE_ORDERS,
            payload: orders
        })
    }
};

export const loadingActivate = () => {
    return (dispatch: Dispatch<LoadingAction>) => {
        dispatch({
            type: ACTION_TYPE.LOADING_ACTIVE
        })
    }
};

export const loadingDeActivate = () => {
    return (dispatch: Dispatch<LoadingAction>) => {
        dispatch({
            type: ACTION_TYPE.LOADING_INACTIVE
        })
    }
};