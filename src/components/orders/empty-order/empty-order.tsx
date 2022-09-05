import React, { useEffect, useState } from 'react'
import { ReactComponent as LoaderIcon } from '../../icons/spinner.svg';
import './empty-order.scss';

export const EmptyOrder = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [])

    return (
        <div className='empty-order-wrapper'>
            {isLoading
                ? <div className='loader'><LoaderIcon /></div>
                : "No Items"
            }
        </div>
    )
}
