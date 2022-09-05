import React, { useState } from 'react'
import { ORDER_TYPE, Order } from '../../models/orders-model'
import { EmptyOrder } from '../empty-order/empty-order';
import { Tab } from '../tabs/tab';
import './orders.scss';
import { OrderView } from './order-view';

interface OrdersProps {
    orders?: Order;
}

export const Orders = ({ orders }: OrdersProps) => {

    const [currentTab, setCurrentTab] = useState<ORDER_TYPE>(ORDER_TYPE.ORDER_AAA);
    const [sentActive, setSentActive] = useState(true);

    const handleTabSelection = (selected: ORDER_TYPE) => {
        setCurrentTab(selected);
    };
    const handleOrderSubTab = (active: boolean) => {
        setSentActive(active);
    };

    return (
        <Tab currentTab={currentTab} tabClicked={handleTabSelection}>
            <div className='order-header'>
                <div className='order-tab-section'>
                    <div onClick={() => handleOrderSubTab(true)} className={sentActive ? ' order-tab order-tab-active' : 'order-tab'}>SENT</div>
                    <div onClick={() => handleOrderSubTab(false)} className={!sentActive ? 'order-tab order-tab-active' : 'order-tab'}>ERRORS</div>
                </div>
                <div className='order-header-title'>
                    RECENT ORDERS
                </div>
            </div>
            {sentActive ?
                <OrderView currentTab={currentTab} orderSent={orders?.orders_AAA.sent} />
                : <EmptyOrder />}

        </Tab>
    )
}
