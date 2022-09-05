import React from 'react'
import './loader.scss';
import { ReactComponent as LoaderIcon } from '../icons/spinner.svg';
import CloseIcon from '../icons/cross.svg';

interface LoaderProps {
    close?: () => void;
}

export const Loader = ({ close }: LoaderProps) => {
    return (
        <div className="overlay">
            <div className='close-button' onClick={close}>
                <img src={CloseIcon} alt="close" width="50px" height="50px" />
            </div>
            <div className="loader">
                <LoaderIcon />
            </div>
        </div>

    )
}
