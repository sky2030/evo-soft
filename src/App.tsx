import axios from 'axios';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/header';
import { Orders } from './components/orders/order-layout/orders';
import { Loader } from './components/loader/loader';
import './App.scss';
import { actionCreators, State } from './state';
import { bindActionCreators } from 'redux';

function App() {

  const dispatch = useDispatch();
  const { updateHeader, updateOrders, loadingActivate, loadingDeActivate } = bindActionCreators(actionCreators, dispatch);
  const loading = useSelector((state: State) => state.loading.loading);

  const getHeaderInfo = useCallback(() => {
    loadingActivate();
    axios.get('https://evoteam-verasoft.github.io/data/summary.json')
      .then(res => {
        loadingDeActivate();
        updateHeader(res.data)

      })
      .catch((error) => {
        alert(error);
        loadingDeActivate();
      })
  }, [loadingActivate, loadingDeActivate, updateHeader]);

  const getOrdersInfo = useCallback(() => {
    loadingActivate();
    axios.get('https://evoteam-verasoft.github.io/data/orders.json')
      .then(res => {
        loadingDeActivate();
        updateOrders(res.data);
      })
      .catch((error) => {
        alert(error);
        loadingDeActivate();
      })
  }, [loadingActivate, loadingDeActivate, updateOrders]);

  useEffect(() => {
    getHeaderInfo();
    getOrdersInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      {loading ? <Loader /> : null}
      <Header />
      <Orders />
    </div>
  );
}

export default App;
