import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const theme = createTheme({
    fontFamily: 'Inter, sans-serif',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <MantineProvider theme={theme}>
      <App />
      </MantineProvider>
    </BrowserRouter>  
  </React.StrictMode>,
)
