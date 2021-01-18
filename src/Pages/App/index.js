import React from 'react';
import Router from '../../Base/Router'
import ToastContainer from '../../Base/Utils/ToastContainer'
import './App.css';

const App = () => {
  return (
    <div className={'mainApp-wrapper'}>
      <ToastContainer />
      <Router />
    </div>
  );
}

export default App;

