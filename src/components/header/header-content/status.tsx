import React from 'react'
import { HeaderInfo } from '../../models/header-model';

interface StatusProps {
    info?: HeaderInfo;
}

export const Status = ({ info }: StatusProps) => {
    return (
        <div className='status'>
            <div className='top'> 90-DAY COMMUNICATION ACTIVITY</div>
            <div className='bottom'>
                <div className='status-card'>
                    <div className='status-number'>{info?.activity.sms}</div>
                    <div className='label'>SMS</div>
                    <div className='card-label'></div>
                </div>
                <div className='status-card'>
                    <div className='status-number'>{info?.activity.email}</div>
                    <div className='label'>EMAIL</div>
                    <div className='card-label'></div>
                </div>
                <div className='status-card-last'>
                    <div className='status-number'>{info?.activity.orders}</div>
                    <div className='label'>ORDERS</div>
                    <div className='card-label'></div>
                </div>
            </div>
        </div>
    )
}
