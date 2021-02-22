import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Pages/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store, persistor } from './Base/Redux/Store'
import axios from 'axios';
import i18n from './Base/I18n';
import { I18nextProvider } from 'react-i18next';
import { getTokenFromCookie } from './Base/Utils/CookiesWrapper'
import { PersistGate } from 'redux-persist/integration/react'

// Setting Axios default info for the all app
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
// Intercepting all the request to put the token in if exist
axios.interceptors.request.use(request => {
  if (getTokenFromCookie()) {
    request.headers.Authorization = `Bearer ${getTokenFromCookie()}`;
  }
  return request;
}, error => {
  console.log(error);
  return Promise.reject(error);
});


ReactDOM.render(
  <React.StrictMode>
    {/* Provider for the redux store  */}
    <Provider store={store}>
      {/* Provider for the redux persist */}
      <PersistGate loading={null} persistor={persistor}>
        {/* Provider for the multiple languages */}
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
