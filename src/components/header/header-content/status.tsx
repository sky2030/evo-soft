import React from 'react'
import { useSelector } from 'react-redux';
import { State } from '../../../state';

export const Status = () => {
    const info = useSelector((state: State) => state.header.header);
    return (
        <div className='status'>
            <div className='top'> 90-DAY COMMUNICATION ACTIVITY</div>
            <div className='bottom'>
                <div className='status-card'>
                    <div className='status-number'>{info?.activity.sms}</div>
                    <div className='card-label'>SMS</div>
                </div>
                <div className='status-card'>
                    <div className='status-number'>{info?.activity.email}</div>

                    <div className='card-label'>EMAIL</div>
                </div>
                <div className='status-card-last'>
                    <div className='status-number'>{info?.activity.orders}</div>
                    <div className='card-label'>ORDERS</div>
                </div>
            </div>
        </div>
    )
}
