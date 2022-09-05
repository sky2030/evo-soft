import React from 'react'
import { ORDER_TYPE, Sent } from '../../models/orders-model';
import { EmptyOrder } from '../empty-order/empty-order';
import { SentTable } from '../sent-table/sent-table';

interface SentOrderViewProps {
    currentTab: ORDER_TYPE;
    orderSent?: Sent[];
}

export const OrderView = ({ currentTab, orderSent }: SentOrderViewProps): JSX.Element => {
    switch (currentTab) {
        case ORDER_TYPE.ORDER_A:
            return (
                <EmptyOrder />
            );
        case ORDER_TYPE.ORDER_AA:
            return (
                <EmptyOrder />
            );
        case ORDER_TYPE.ORDER_AAA:
            return (
                <SentTable orderDetails={orderSent} />
            );
        case ORDER_TYPE.ORDER_B:
            return (
                <EmptyOrder />
            );
        case ORDER_TYPE.ORDER_C:
            return (
                <EmptyOrder />
            );

        default: return (
            <EmptyOrder />
        );
    }

}
