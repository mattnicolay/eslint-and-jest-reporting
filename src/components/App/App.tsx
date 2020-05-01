import React from 'react';
import './App.css';
import Test from '../Test/Test';
import NameType from '../../NameType';

const App: React.FC = () => {
  return (
    <div className="App">
      <input />
      <Test name="Matt" nameType={NameType.FIRST} />
    </div>
  )
};

export default App;
