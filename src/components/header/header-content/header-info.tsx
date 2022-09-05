import React from 'react'
import './header-content.scss';
import User from '../../icons/user.svg';
import Mobile from '../../icons/mobile.svg';
import Building from '../../icons/building.svg';
import Home from '../../icons/home.svg';

import { HeaderInfo } from '../../models/header-model';

interface HeaderInfoProps {
    info?: HeaderInfo;
}

export const HeaderInfoSection = ({ info }: HeaderInfoProps) => {
    return (
        <div className='info'>
            <div className='row'>
                <div className='info-icon'>
                    <img src={User} alt="user" width="25px" height="30px" />
                </div>
                <div className='info-text-normal'>
                    #{info?.id}
                </div>
            </div>
            <div className='row'>
                <div className='info-icon'>
                    <img src={Mobile} alt="user" width="25px" height="17px" />
                </div>
                <div className='info-text-medium'>
                    #{info?.mobile_phone}
                </div>
            </div>
            <div className='row'>
                <div className='info-icon'>
                    <img src={Building} alt="user" width="25px" height="17px" />
                </div>
                <div className='info-text-normal'>
                    #{info?.work_phone}
                </div>
            </div>
            <div className='row'>
                <div className='info-icon'>
                    <img src={Home} alt="user" width="25px" height="17px" />
                </div>
                <div className='info-text-normal'>
                    #{info?.home_phone}
                </div>
            </div>
            <div className='row'>
                <div className='info-icon'>
                    <span className='info-email-icon'>@</span>
                </div>
                <div className='info-text-normal'>
                    #{info?.email}
                </div>
            </div>
        </div>
    )
}
