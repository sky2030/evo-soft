import React from 'react'
import './top-header.scss';

interface TopHeaderProps {
    userName: string;
    initiateOrder: () => void;
}

export const TopHeader = ({ userName, initiateOrder }: TopHeaderProps) => {
    return (
        <div className='top-section'>
            <div className='top-left'>
                <div className='star'>☆</div>
                <div className='user-name'>{userName}</div>
            </div>
            <div className='top-right'>
                <div className='order-button' onClick={initiateOrder}>
                    New Order
                </div>
            </div>
        </div>
    )
}
