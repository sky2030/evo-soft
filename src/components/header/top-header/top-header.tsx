import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../../state';
import './top-header.scss';



export const TopHeader = () => {

    const dispatch = useDispatch();
    const { loadingActivate } = bindActionCreators(actionCreators, dispatch);

    const headers = useSelector((state: State) => state.header.header);
    const userName = `${headers?.first_name} ${headers?.last_name}`;


    return (
        <div className='top-section'>
            <div className='top-left'>
                <div className='star'>☆</div>
                <div className='user-name'>{userName}</div>
            </div>
            <div className='top-right'>
                <div className='order-button' onClick={loadingActivate}>
                    New Order
                </div>
            </div>
        </div>
    )
}
