import React, { useCallback } from 'react';
import { HeaderInfo } from '../../models/header-model';
import './header-content.scss';

import UserLarge from '../../icons/user-large.svg';
import moment from 'moment';
import { HeaderInfoSection } from './header-info';
import { Status } from './status';


interface HeaderContentProps {
    info?: HeaderInfo;
}

export const HeaderContent = ({ info }: HeaderContentProps) => {

    const convertDate = useCallback(() => {
        const str = info?.carrier_status.since;
        return moment(str).format("MMM D, YYYY");
    }, [info?.carrier_status.since]);

    const calculate_age = useCallback(() => {
        let today = new Date();
        let birthday = info?.birth_date.split("-")[2];
        let birthMonth = info?.birth_date.split("-")[1];
        let birthYear = info?.birth_date.split("-")[0];
        let age_now = today.getFullYear() - Number(birthYear);
        let m = today.getMonth() - Number(birthMonth);
        if (m < 0 || (m === 0 && today.getDate() < Number(birthday))) {
            age_now--;
        }

        return age_now;
    }, [info?.birth_date]);




    return (
        <div className='content-wrapper'>
            <div className='user-icon'>
                <img src={UserLarge} alt="user" width='63px' height='72px' />
                {info?.gender.toUpperCase()} - {calculate_age()}
            </div>
            <HeaderInfoSection info={info} />
            <Status info={info} />

            <div className='carrrier-status'>
                <div className='status-card'>
                    SMS CARRIER STATUS
                    <div className='status-number'>{info?.carrier_status.status}</div>
                    <div className='label'> SINCE {convertDate()}</div>
                    <div className='card-label'></div>
                </div>
            </div>
        </div>
    )
}
