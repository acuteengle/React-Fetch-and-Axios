import React from 'react';
import './App.css';
import FetchRandomUser from './FetchRandomUser';
import AxiosRandomUser from './AxiosRandomUser';

function App() {
  return (
    <div>
      <FetchRandomUser/>
      <AxiosRandomUser/>
    </div>
  );
}

export default App;
