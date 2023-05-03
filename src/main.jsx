import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { GithubProvider } from './context/context.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-tavdtsbl4lprrlxw.us.auth0.com"
    clientId="NW7YoHEmc0LQKjdgqkPTUGrEQieg54eB"
    // authorizationParams={{
    //   redirect_uri: window.location.origin,
    // }}
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>
);
