import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HeroUIProvider } from '@heroui/react';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HeroUIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </HeroUIProvider>
  </React.StrictMode>
);


reportWebVitals();
