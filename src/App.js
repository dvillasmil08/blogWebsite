import React from 'react';
import Application from './components/Application/Application';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  const application = [
    {
      id: 'a1',
      title: 'Turtle application',
      status:'Received',
      date: new Date(2022, 7, 14)
    },
    {
      id: 'a2',
      title: 'Tuna application',
      status: 'Under Review',
      date: new Date(2022, 7, 12)
    },
    {
      id: 'a3',
      title: 'Shark application',
      status: 'Under Review',
      date: new Date(2022, 7, 10)
    },
    {
      id: 'a4',
      title: 'Dog application',
      status: 'Approved',
      date: new Date(2022, 7, 7)
    },
    {
      id: 'a5',
      title: 'Cat application',
      status: 'Closed',
      date: new Date(2022, 5, 10)
    }
  ]

  return (
    <div>
      <NavBar />
      <Application items={application} />
    </div>
  );
};

export default App;