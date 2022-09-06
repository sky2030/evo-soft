import React from 'react'
import { ORDER_TYPE } from '../../models/orders-model';
import { EmptyOrder } from '../empty-order/empty-order';
import { SentTable } from '../sent-table/sent-table';

interface SentOrderViewProps {
    currentTab: ORDER_TYPE;
}

export const OrderView = ({ currentTab }: SentOrderViewProps): JSX.Element => {
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
                <SentTable />
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
