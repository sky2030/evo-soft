import React from 'react'
import { HeaderInfo } from '../models/header-model';
import './header.scss';
import { HeaderContent } from './header-content/header-content';
import { TopHeader } from './top-header/top-header';

interface HeaderProps {
    headerInfo?: HeaderInfo;
    initiateOrder: () => void;
}

const Header = ({ headerInfo, initiateOrder }: HeaderProps) => {
    return (
        <div className='header'>
            <TopHeader userName={`${headerInfo?.first_name} ${headerInfo?.last_name}`} initiateOrder={initiateOrder} />
            <HeaderContent info={headerInfo} />
        </div>
    )
}

export default Header;