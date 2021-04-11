import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import GlobalStyles from './styles/global';

import { LoginProvider } from './context/LoginContext'

const App = () => {
  return (
    <LoginProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Routes />
      </BrowserRouter>
    </LoginProvider>
  )
}

export default App
