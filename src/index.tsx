import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import Header from './components/header';
import store from './features/store';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <div className='wrapper'>
    <Provider store={store}>
      <Header/>
      <App />
    </Provider>
  </div>
);

