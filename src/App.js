import React from 'react';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import Application from './components/Application/Application';
import applicationData from './components/Data/Data';
import ApplicationContent from './components/ApplicationContent/ApplicationContent';
import NavBar from './components/NavBar/NavBar';
import Error from './components/Error';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Application items={applicationData} />} />
        <Route path='application' element={<ApplicationContent />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
