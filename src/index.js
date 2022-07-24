import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './index.css';
import App from './App';
import ApplicationContent from './components/ApplicationContent/ApplicationContent';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='./components/ApplicationContent/ApplicationContent' element={<ApplicationContent />}></Route>
    </Routes>
    <App />
  </BrowserRouter>
)