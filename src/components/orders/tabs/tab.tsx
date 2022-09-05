import React, { ReactNode } from 'react'
import { ORDER_TYPE } from '../../models/orders-model';
import './tab.scss';

interface TabProps {
    children: ReactNode;
    tabClicked: (tab: ORDER_TYPE) => void;
    currentTab: ORDER_TYPE;
}

export const Tab = ({ children, tabClicked, currentTab }: TabProps) => {
    return (
        <div>
            <div className='tab'>
                <div className='tab-lists'>
                    <div onClick={() => tabClicked(ORDER_TYPE.ORDER_A)} className={currentTab === ORDER_TYPE.ORDER_A ? 'tab-list tab-active' : 'tab-list'}>ORDERS A</div>
                    <div onClick={() => tabClicked(ORDER_TYPE.ORDER_AA)} className={currentTab === ORDER_TYPE.ORDER_AA ? 'tab-list tab-active' : 'tab-list'}>ORDERS AA</div>
                    <div onClick={() => tabClicked(ORDER_TYPE.ORDER_AAA)} className={currentTab === ORDER_TYPE.ORDER_AAA ? 'tab-list tab-active' : 'tab-list'}>ORDERS AAA</div>
                    <div onClick={() => tabClicked(ORDER_TYPE.ORDER_B)} className={currentTab === ORDER_TYPE.ORDER_B ? 'tab-list tab-active' : 'tab-list'}>ORDERS B</div>
                    <div onClick={() => tabClicked(ORDER_TYPE.ORDER_C)} className={currentTab === ORDER_TYPE.ORDER_C ? 'tab-list tab-active' : 'tab-list'}>ORDERS C</div>
                </div>
            </div>
            {children}
        </div>
    )
}
