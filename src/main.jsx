import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider as Provider } from 'react-auth-kit'
import { Auth0Provider as Auth0Pro } from '@auth0/auth0-react'
// import { Provider as Prove } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Pro>
      <Provider>
        {/* <Prove> */}
        <Router>
          <App />
        </Router>
        {/* </Prove> */}
      </Provider>
    </Auth0Pro>
  </React.StrictMode>,
)
