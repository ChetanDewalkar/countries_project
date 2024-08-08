import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleCountry from './src/components/SingleCountry';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/:name" element={<SingleCountry />}></Route>
    </Routes>
  </BrowserRouter>
);
