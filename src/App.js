import React from 'react';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import Application from './components/Application/Application';
import ApplicationContent from './components/ApplicationContent/ApplicationContent';
import NavBar from './components/NavBar/NavBar';
import Error from './components/Error';

const App = () => {
  const application = [
    {
      id: 'a1',
      title: 'Turtle application',
      status:'Received',
      date: new Date(2022, 7, 14),
      description: 'I love slowRP!!'
    },
    {
      id: 'a2',
      title: 'Tuna application',
      status: 'Under Review',
      date: new Date(2022, 7, 12),
      description: 'I love swimRP!'
    },
    {
      id: 'a3',
      title: 'Shark application',
      status: 'Under Review',
      date: new Date(2022, 7, 10),
      description: 'I deep water RP!!'
    },
    {
      id: 'a4',
      title: 'Dog application',
      status: 'Approved',
      date: new Date(2022, 7, 7),
      description: 'Woof Woof RP is best!'
    },
    {
      id: 'a5',
      title: 'Cat application',
      status: 'Closed',
      date: new Date(2022, 5, 10),
      description: 'Leave me alone and feed me.'
    }
  ]

  return (
  <BrowserRouter>
    <NavBar />
  <Routes>
    {/* HOME */}
    <Route path='/' element={
      <div>
        <Application items={application} />
      </div>} />

    {/* APP VIEW */}
    <Route path='application' element={<ApplicationContent />} />
    <Route path='*' element={<Error />} />


  </Routes>
      
  </BrowserRouter>
  
  );
};

export default App;