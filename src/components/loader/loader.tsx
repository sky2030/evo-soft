import React from 'react'
import './loader.scss';
import { ReactComponent as LoaderIcon } from '../icons/spinner.svg';
import CloseIcon from '../icons/cross.svg';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { useDispatch } from 'react-redux';

export const Loader = () => {
    const dispatch = useDispatch();
    const { loadingDeActivate } = bindActionCreators(actionCreators, dispatch);
    return (
        <div className="overlay">
            <div className='close-button' onClick={loadingDeActivate}>
                <img src={CloseIcon} alt="close" width="50px" height="50px" />
            </div>
            <div className="loader">
                <LoaderIcon />
            </div>
        </div>

    )
}
