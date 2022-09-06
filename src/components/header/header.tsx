import React from 'react'
import './header.scss';
import { HeaderContent } from './header-content/header-content';
import { TopHeader } from './top-header/top-header';


const Header = () => {
    return (
        <div className='header'>
            <TopHeader />
            <HeaderContent />
        </div>
    )
}

export default Header;