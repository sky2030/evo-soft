import moment from 'moment';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../../state';
import './sent-table.scss';


export const SentTable = (): JSX.Element => {

    const orderDetails = useSelector((state: State) => state.orders.orders?.orders_AAA.sent);

    const convertDate = useCallback((date: Date) => {
        return moment(date).format("ddd, MMM DD");
    }, []);

    const convertTime = useCallback((time: string) => {
        const timeArray = time.split(":");
        let convertedTime = '';
        if (Number(timeArray[0]) > 12) {
            convertedTime = `${Number(timeArray[0]) - 12}:${Number(timeArray[1])} PM`
        } else {
            convertedTime = `${Number(timeArray[0])}:${Number(timeArray[1])} AM`
        }

        return convertedTime;

    }, []);

    return (
        <div className='sent-content'>
            <div className='table-header'>
                <div className='date-head'>DATE & TIME </div>
                <div className='subject-head'>SUBJECT</div>
                <div className='com-head'>COMMUNICATION TYPE </div>
                <div className='order-head'>ORDER # </div>
                <div className='empty-header'></div>
            </div>
            {orderDetails && orderDetails.map((item): JSX.Element => {
                return (
                    <div className={item.id === 2 ? 'table-row even-row' : 'table-row'} key={`${item.id}`}>
                        <div className='date-time'>
                            <div className='date'>{convertDate(item.sent_dt)}</div>
                            <div className='time'>{convertTime(item.sent_tm)}</div>
                        </div>
                        <div className='subject'>
                            <div className='sub-title'>{item.subject.title}</div>
                            <div className='sub-email'>{item.subject.email}</div>
                        </div>
                        <div className='general-info'>{item.type}</div>
                        <div className='general-info'>{`${item.order_id}`}</div>
                        <div className='button-wrapper'><div className='re-send-button'>RESEND</div></div>
                    </div>
                );
            })

            }


        </div>
    )
}
