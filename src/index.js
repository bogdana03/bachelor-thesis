import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react';
import 'animate.css/animate.min.css'


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_CILENT_ID;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Auth0Provider
      domain="dev-m3fl5433mr0zf0xv.us.auth0.com"
      clientId="wscFlh4hHAGaM6K8vQes0FLBF60VAwYT"
      
      redirectUri={window.location.origin}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
