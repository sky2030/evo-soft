import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_HEADER_DATA, UPDATE_ORDERS_DATA } from './actions';
import Header from './components/header/header';
import { HeaderInfo } from './components/models/header-model';
import { Order } from './components/models/orders-model';
import { Orders } from './components/orders/order-layout/orders';
import { Loader } from './components/loader/loader';
import './App.scss';

function App() {
  const [headerInfo, setHeaderInfo] = useState<HeaderInfo>();
  const [ordersInfo, setOrdersInfo] = useState<Order>();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const getHeaderInfo = useCallback(() => {
    setIsLoading(true);
    axios.get('https://evoteam-verasoft.github.io/data/summary.json')
      .then(res => {
        setHeaderInfo(res.data);
        setIsLoading(false);
        dispatch({ type: UPDATE_HEADER_DATA, header: res.data });
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      })
  }, [dispatch]);

  const getOrdersInfo = useCallback(() => {
    setIsLoading(true);
    axios.get('https://evoteam-verasoft.github.io/data/orders.json')
      .then(res => {
        setOrdersInfo(res.data);
        setIsLoading(false);
        dispatch({ type: UPDATE_ORDERS_DATA, orders: res.data });
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      })
  }, [dispatch]);

  useEffect(() => {
    getHeaderInfo();
    getOrdersInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const closeLoader = () => {
    setIsLoading(false);
  }

  const initiateOrder = () => {
    setIsLoading(true);
  }

  return (
    <div className="App">
      {isLoading ? <Loader close={closeLoader} /> : null}
      <Header headerInfo={headerInfo} initiateOrder={initiateOrder} />
      <Orders orders={ordersInfo} />
    </div>
  );
}

export default App;
